// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/userRoutes');
const animeRoutes = require('./routes/animeRoutes');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/users', userRoutes);
app.use('/anime', animeRoutes);
app.use('/auth', authRoutes);


app.get('/', (req, res) => {
  res.send('AnimeHub SQL backend is running!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
