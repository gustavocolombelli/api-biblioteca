const express = require('express');
const app = express();
const port = 3000;

// Simulando uma lista de livros
const livros = [
  {
    codigo: "LC123",
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    anoPublicacao: 1899,
    emprestado: false,
    usuarioEmprestimo: null,
    genero: "Drama"
  },
  {
    codigo: "LT456",
    titulo: "It",
    autor: "Stephen King",
    anoPublicacao: 1986,
    emprestado: false,
    usuarioEmprestimo: null,
    genero: "Terror"
  },
  {
    codigo: "RN789",
    titulo: "National Geographic",
    autor: "Vários Autores",
    anoPublicacao: 2022,
    emprestado: false,
    usuarioEmprestimo: null,
    edicao: "Março"
  },
  {
    codigo: "RN789",
    titulo: "National Geographic",
    autor: "Vários Autores",
    anoPublicacao: 2022,
    emprestado: false,
    usuarioEmprestimo: null,
    edicao: "Março"
  }
];

// Rota para obter a lista de livros
app.get('/acervo', (req, res) => {
  res.json(livros);
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });