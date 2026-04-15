const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: "API is running" });
});

app.get('/health', (req, res) => {
  res.status(200).json({ message: "healthy" });
});

app.get('/me', (req, res) => {
  res.status(200).json({
    name: "Chinonso Vivian Ojeri",
    email: "chinonsovivianojeri@gmail.com",
    github: "https://github.com/Chinonsoviv"
  });
});

const PORT = 3000;
app.listen(PORT,'0.0.0.0', () => console.log(`Server running on port ${PORT}`));
