const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Contact form endpoint (example)
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  // Here you would handle sending email or saving to DB
  res.json({ success: true, message: 'Message received!', data: { name, email, subject, message } });
});

// Projects endpoint (example)
app.get('/api/projects', (req, res) => {
  res.json([
    { id: 1, title: 'FAER Project (Hackathon)', repo: 'https://github.com/Latchanalatchana/Hackathon' },
    // Add more projects as needed
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
