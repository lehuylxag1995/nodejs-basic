const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)

const Course = new Schema(
  {
    name: { type: String, default: '', trim: true },
    image: { type: String, default: '', trim: true },
    description: { type: String, default: '', trim: true },
    videoID: { type: String },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Course', Course)
