/*eslint-disable*/
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
      name: req.body.name,
      email: req.body.email,
      enrollnumber: req.body.enrollnumber
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
    const updatedStudent = await Todo.findByIdAndUpdate(req.params.id, req.body)
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
    const removeStudent = await Todo.findByIdAndRemove(req.params.id)
    res.send({ message: 'The student was removed' })
  } catch (err) {
    res.status(400).send({ error: err })
  }
}

module.exports = { createDava, getDava, getDavaId, updateDava, deleteDava }
