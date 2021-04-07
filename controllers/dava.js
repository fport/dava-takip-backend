const Todo = require('../models/dava')
const davaRouter = require('express').Router()

davaRouter.get('/', async (req, res) => {
  const dava = await Todo.find({})
  res.send({ dava })
})

davaRouter.get('/:id', async (req, res) => {
  const student = await Todo.findById(req.params.id)
  res.send({ student })
})

davaRouter.post('/', async (req, res) => {
  const newDava = await Todo.create({
    active: req.body.active,
    name: req.body.name,
    designnumber: req.body.designnumber,
    designname: req.body.designname,
    productlink: req.body.productlink,
    vergino: req.body.vergino,
    adress: req.body.adress,
    ticarisicil: req.body.ticarisicil,
    telefonno: req.body.telefonno,
    email: req.body.email,
    domainregistrantaddress: req.body.domainregistrantaddress,
    tpekayitlimarka: req.body.tpekayitlimarka,
    notlar: req.body.notlar,
    calinantasarim: req.body.calinantasarim,
    sergilendigiyer: req.body.sergilendigiyer,
    tahminisatis: req.body.tahminisatis,
    social: req.body.social
  })
  res.send({ newDava })
})

davaRouter.put('/:id', async (req, res) => {
  await Todo.findByIdAndUpdate(req.params.id, req.body)
  res.send({ message: 'The student was updated' })
})

davaRouter.delete('/:id', async (req, res) => {
  await Todo.findByIdAndRemove(req.params.id)
  res.send({ message: 'The student was removed' })
})

module.exports = davaRouter
