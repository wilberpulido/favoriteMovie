const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FilmSchema = new Schema({
  adult: Boolean,
  backdrop_path: String,
  genre_ids: [Number],
  id: Number,
  original_language: String,
  overview: String,
  popularity: Number,
  poster_path: String,
  release_date: String,
  title: String,
  video: Boolean,
  vote_average: Number,
  vote_count: Number
})

module.exports = FilmSchema
