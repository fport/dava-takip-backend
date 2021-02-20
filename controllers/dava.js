const Todo = require('../models/dava')

// @route   GET /api/dava/
// @desc    Get all dava
// @access  Public
const getDava = async (req, res) => {
  try {
    const dava = await Todo.find({})
    res.send({ dava })
  } catch (err) {
    res.status(400).send({ error: err })
  }
}

// @route   GET /api/dava/:id
// @desc    Get a specific dava
// @access  Public
const getDavaId = async (req, res) => {
  try {
    const student = await Todo.findById(req.params.id)
    res.send({ student })
  } catch (err) {
    res.status(404).send({ message: 'Student not found!' })
  }
}

// @route   POST /api/dava/
// @desc    Create a dava
// @access  Public
const createDava = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).send({ error: err })
  }
}

// @route   PUT /api/dava/:id
// @desc    Update a dava
// @access  Public
const updateDava = async (req, res) => {
  try {
    await Todo.findByIdAndUpdate(req.params.id, req.body)
    res.send({ message: 'The student was updated' })
  } catch (err) {
    res.status(400).send({ error: err })
  }
}

// @route   DELETE /api/students/:id
// @desc    Delete a student
// @access  Public
const deleteDava = async (req, res) => {
  try {
    await Todo.findByIdAndRemove(req.params.id)
    res.send({ message: 'The student was removed' })
  } catch (err) {
    res.status(400).send({ error: err })
  }
}

module.exports = { createDava, getDava, getDavaId, updateDava, deleteDava }
