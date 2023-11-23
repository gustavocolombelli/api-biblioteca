const express = require('express');
const { livros } = require('./livros');
const cors = require('cors')
const app = express();
const port = 3000;


app.use(cors());

app.get('/acervo', (req, res) => {
  res.json(livros);
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });