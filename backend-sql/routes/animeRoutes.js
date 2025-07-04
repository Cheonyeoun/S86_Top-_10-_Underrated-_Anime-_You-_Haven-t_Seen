const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all anime
router.get('/', async (req, res) => {
  try {
    const [results] = await db.query(`
      SELECT anime.*, users.name AS creator 
      FROM anime 
      JOIN users ON anime.created_by = users.id
    `);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new anime
router.post('/', async (req, res) => {
  const {
    title, synopsis, genre, rating, episodes,
    release_year, studio, status, image_url, created_by
  } = req.body;

  try {
    const [result] = await db.query(`
      INSERT INTO anime (title, synopsis, genre, rating, episodes, release_year, studio, status, image_url, created_by)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [title, synopsis, JSON.stringify(genre), rating, episodes, release_year, studio, status, image_url, created_by]
    );
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET anime by user ID
router.get('/user/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    const [results] = await db.query(`
      SELECT anime.*, users.name AS creator
      FROM anime 
      JOIN users ON anime.created_by = users.id
      WHERE created_by = ?`,
      [userId]
    );
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
