const User = require('../models/user')

const usersInDb = async () => {
  return await User.find({})
}

module.exports = {
  usersInDb
}
