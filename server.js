const express = require('express');
const path = require('path');  // Node.js path module

const app = express();
const port = 3000;

// Serve static files from the 'static', 'views', and 'img' folders
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'img')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
