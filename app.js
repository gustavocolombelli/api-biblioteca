const { livros } = require('./livros');
const { users } = require('./users');

const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;


app.use(cors());

app.get('/acervo', (req, res) => {
  res.json(livros);
});

app.get('/users', (req, res)=>{
  res.json(users);
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });