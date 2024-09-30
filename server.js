const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

app.use(express.static(path.join(__dirname, 'dist'))); // Ensure this points to your build output

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

