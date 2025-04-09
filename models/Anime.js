
const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  synopsis: { type: String, required: true },
  genre: { type: [String], required: true }, // array of genres
  rating: { type: Number, required: true },
  episodes: { type: Number, required: true },
  releaseYear: { type: Number, required: true },
  studio: { type: String, required: true },
  status: { type: String, enum: ['Finished', 'Ongoing'], default: 'Finished' },
  imageUrl: { type: String },
  recommendedBy: { type: String }
}, { timestamps: true });


const Anime = mongoose.model('Anime', animeSchema, 'anime');
module.exports = Anime;