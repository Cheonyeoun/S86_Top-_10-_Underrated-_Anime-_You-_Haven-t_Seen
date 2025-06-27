// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/userRoutes');
const animeRoutes = require('./routes/animeRoutes');

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/anime', animeRoutes);

app.get('/', (req, res) => {
  res.send('AnimeHub SQL backend is running!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
