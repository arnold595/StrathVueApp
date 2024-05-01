// server.js
const express = require('express');
const app = express();
const port = 3000;

// Define a sample endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: 'Data from the server' });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
