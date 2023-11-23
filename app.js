const express = require('express');
const { livros } = require('./livros');
const app = express();
const port = 3000;


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  next();
});

app.get('/acervo', (req, res) => {
  res.json(livros);
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });