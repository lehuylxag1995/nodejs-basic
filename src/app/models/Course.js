const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Course = new Schema({
  name: { type: String, default: '', maxLenght: 255, trim: true },
  description: { type: String, default: '', maxLenght: 600, trim: true },
  image: { type: String, default: '', maxLenght: 255, trim: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Course', Course)
