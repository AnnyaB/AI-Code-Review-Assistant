const express = require('express');
const mongoose = require('mongoose'); // Add this line
const app = express();
const PORT = 3000;

// ✅ Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/ai-code-review-assistant', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

app.use(express.json()); // To parse JSON bodies

// Import your model
const Review = require('./models/codeReview');

// POST endpoint
app.post('/reviews', async (req, res) => {
  try {
    const newReview = new Review(req.body);
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET endpoint
app.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
