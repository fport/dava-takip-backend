const mongoose = require('mongoose')

const DavaSchema = new mongoose.Schema({
  todo: {
    type: String
  }
})

const Dava = mongoose.model('Dava', DavaSchema)

module.exports = Dava
