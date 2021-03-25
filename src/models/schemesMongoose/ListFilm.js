const mongoose = require('mongoose')
const FilmSchema = require('./Film')
const Schema = mongoose.Schema

const ListfilmSchema = new Schema({
  playlistName: {
    type: String,
    required: true
  },
  listType: {
    type: Number,
    required: true
  },
  details: {
    type: String,
    require: true
  },
  films: {
    type: [FilmSchema],
    default: undefined
  }
})

module.exports = ListfilmSchema
