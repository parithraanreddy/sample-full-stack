// backend/index.js
const express = require('express');
const app = express();
const port = 5000;

// In-memory storage for simplicity
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];

// API endpoint to get items
app.get('/api/items', (req, res) => {
  res.json(items);
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
