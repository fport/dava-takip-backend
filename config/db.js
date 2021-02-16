const mongoose = require('mongoose')

module.exports = () =>
  mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/davatakip', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  })
