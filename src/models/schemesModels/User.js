const mongoose = require('mongoose')
const ListfilmSchema = require('../schemesMongoose/ListFilm')
const Schema = mongoose.Schema

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  lastName: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    max: 1024
  },
  dateRegister: {
    type: Date,
    default: Date.now
  },
  lists: {
    type: [ListfilmSchema],
    default: undefined
  }
})

module.exports = mongoose.model('User', userSchema)
