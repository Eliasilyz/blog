const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Mengirim file HTML saat user mengakses route utama
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server aktif di http://localhost:${port}`);
});