const express = require('express');
const router = express.Router();

// Login: sets username cookie
router.post('/login', (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ error: 'Username required' });

  res.cookie('username', username, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });
  res.json({ message: `Logged in as ${username}` });
});

// Logout: clears cookie
router.post('/logout', (req, res) => {
  res.clearCookie('username');
  res.json({ message: 'Logged out successfully' });
});

// Check current user
router.get('/me', (req, res) => {
  const username = req.cookies.username;
  if (username) {
    res.json({ username });
  } else {
    res.status(401).json({ error: 'Not logged in' });
  }
});

module.exports = router;
