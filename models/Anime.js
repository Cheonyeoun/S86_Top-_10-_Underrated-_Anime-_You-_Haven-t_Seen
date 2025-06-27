const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    minlength: [2, 'Title should be at least 2 characters long'],
  },
  synopsis: {
    type: String,
    required: [true, 'Synopsis is required'],
    minlength: [10, 'Synopsis should be at least 10 characters'],
  },
  genre: {
    type: [String],
    required: [true, 'At least one genre is required'],
    validate: {
      validator: (v) => Array.isArray(v) && v.length > 0,
      message: () => 'Genre array must contain at least one item'
    }
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
    min: [0, 'Rating cannot be less than 0'],
    max: [10, 'Rating cannot be more than 10'],
  },
  episodes: {
    type: Number,
    required: [true, 'Episodes are required'],
    min: [1, 'At least 1 episode is required'],
  },
  releaseYear: {
    type: Number,
    required: [true, 'Release year is required'],
    min: [1800, 'Year must be 1800 or later'],
  },
  studio: {
    type: String,
    required: [true, 'Studio is required'],
  },
  status: {
    type: String,
    enum: {
      values: ['Finished', 'Ongoing'],
      message: '{VALUE} is not a valid status'
    },
    default: 'Finished'
  },
  imageUrl: {
    type: String,
    validate: {
      validator: (v) => !v || /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif|svg)$/.test(v),
      message: 'Image URL must be a valid image link'
    }
  },
  recommendedBy: {
    type: String,
    default: 'Anonymous'
  }
}, { timestamps: true });

const Anime = mongoose.model('Anime', animeSchema, 'anime');
module.exports = Anime;
