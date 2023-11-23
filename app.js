const express = require('express');
const { livros } = require('./livros');
const app = express();
const port = 3000;

// Rota para obter a lista de livros
app.get('/acervo', (req, res) => {
  res.json(livros);
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });