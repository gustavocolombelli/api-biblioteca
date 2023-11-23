const express = require('express');
const app = express();
const port = 3000;

// Simulando uma lista de livros
const livros = [
  { id: 1, titulo: 'Dom Casmurro', autor: 'Machado de Assis' },
  { id: 2, titulo: 'A Moreninha', autor: 'Joaquim Manuel de Macedo' },
  { id: 3, titulo: 'O Cortiço', autor: 'Aluísio Azevedo' }
];

// Rota para obter a lista de livros
app.get('/acervo', (req, res) => {
  res.json(livros);
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });