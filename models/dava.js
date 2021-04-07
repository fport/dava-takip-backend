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
  },
  ticarisicil: {
    type: String
  },
  telefonno: {
    type: String
  },
  email: {
    type: String
  },
  domainregistrantaddress: {
    type: String
  },
  tpekayitlimarka: {
    type: String
  },
  notlar: {
    type: String
  },
  calinantasarim: {
    type: String
  },
  sergilendigiyer: {
    type: String
  },
  tahminisatis: {
    type: String
  },
  social: {
    type: Array
  }
})

module.exports = mongoose.model('Dava', DavaSchema)
