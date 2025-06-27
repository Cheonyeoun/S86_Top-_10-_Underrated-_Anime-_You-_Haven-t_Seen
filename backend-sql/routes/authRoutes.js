const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')

const SECRET = '2006';
// Login: sets username cookie
router.post('/login', (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ error: 'Username is required' });

  const token = jwt.sign({ username }, SECRET, { expiresIn: '1d' });

  res.cookie('token', token, {
    httpOnly: true,
    secure: false, // true if HTTPS
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.json({ message: `Logged in as ${username}` });
});

// Logout: clears cookie
router.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out successfully' });
});

// Current user
router.get('/me', (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: 'No token' });

  try {
    const data = jwt.verify(token, SECRET);
    res.json({ username: data.username });
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

module.exports = router;
