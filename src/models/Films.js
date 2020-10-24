const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FilmSchema = new Schema({
    Title: String,
    Year: String,
    imdbID: String,
    Type: String,
    Poster: String,
});


module.exports = mongoose.model('film',FilmSchema);

