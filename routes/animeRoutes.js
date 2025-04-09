const express = require('express');
const router = express.Router();
const Anime = require('../models/Anime');

// CREATE
router.post('/', async (req, res) => {
  try {
    const anime = new Anime(req.body);
    await anime.save();
    res.status(201).json(anime);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ all
router.get('/', async (req, res) => {
  try {
    const animes = await Anime.find();
    res.json(animes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ one
router.get('/:id', async (req, res) => {
  try {
    const anime = await Anime.findById(req.params.id);
    if (!anime) return res.status(404).json({ error: 'Anime not found' });
    res.json(anime);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const anime = await Anime.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!anime) return res.status(404).json({ error: 'Anime not found' });
    res.json(anime);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const anime = await Anime.findByIdAndDelete(req.params.id);
    if (!anime) return res.status(404).json({ error: 'Anime not found' });
    res.json({ message: 'Anime deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
