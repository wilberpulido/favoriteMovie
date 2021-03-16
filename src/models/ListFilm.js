const mongoose = require('mongoose');
const FilmSchema = require('./Film');
const Schema = mongoose.Schema;

const ListfilmSchema = new Schema({
  playlistName: {
    type:String,
    required: true,
  },
  listType: {
    type:String,
    required: true,
  },
  films:{
    type: [FilmSchema],
    default: null,
  } 
});

module.exports = mongoose.model('listFilm',ListfilmSchema);

