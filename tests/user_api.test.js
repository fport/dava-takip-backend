const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const helper = require('./test_helper')
const User = require('../models/user')

beforeEach(async () => {
  await User.deleteMany({})

  const user = new User({
    username: 'root',
    email: 'admin@example.com',
    password: 'password'
  })

  await user.save()
})

describe('when there is initially one user at db', () => {
  test('creation succeds with a fresh usernmae', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'test',
      email: 'test@example.com',
      password: 'password'
    }

    await api
      .post('/api/auth/register')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)

    const usernames = usersAtEnd.map((u) => u.username)
    expect(usernames).toContain(newUser.username)
  })

  test('creation fails with proper statuscode and message if username already taken', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'root',
      email: 'admin@example.com',
      password: 'password'
    }

    const result = await api
      .post('/api/auth/register')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain('`username` to be unique')

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toHaveLength(usersAtStart.length)
  })
})

afterAll(() => {
  mongoose.connection.close
})
