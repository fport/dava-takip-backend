const mongoose = require('mongoose')

const DavaSchema = new mongoose.Schema({
  active: {
    type: Boolean
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  designnumber: {
    type: String
  },
  designname: {
    type: String
  },
  productlink: {
    type: String
  },
  vergino: {
    type: String
  },
  adress: {
    type: String
  }
})

const Dava = mongoose.model('Dava', DavaSchema)

module.exports = Dava
