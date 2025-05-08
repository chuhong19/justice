const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

const mongoose = require('mongoose');

// ⚠️ Thay thế bằng URI thật
const MONGO_URI =
  process.env.MONGO_URI ||
  'mongodb+srv://giabaojustice:giabao123@justice-cluster.svzbdav.mongodb.net/?retryWrites=true&w=majority&appName=justice-cluster';

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

app.use(cors());
app.use(express.json());

app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});

const Note = require('./models/Note');

app.post('/api/notes', async (req, res) => {
  const note = new Note({ text: req.body.text });
  const saved = await note.save();
  res.json(saved);
});

app.get('/api/notes', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});
