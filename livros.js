const entidadeBibliografica = {
  LIVRO:"Livro",
  REVISTA:"Revista"
}

const livros = [
  {
    codigo: "LC123",
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    anoPublicacao: 1899,
    emprestado: false,
    usuarioEmprestimo: null,
    genero: "Drama",
    entidadeBibliografica: entidadeBibliografica.LIVRO
  },
  {
    codigo: "LT456",
    titulo: "It",
    autor: "Stephen King",
    anoPublicacao: 1986,
    emprestado: false,
    usuarioEmprestimo: null,
    genero: "Terror",
    entidadeBibliografica: entidadeBibliografica.LIVRO
  },
  {
    codigo: "RN789",
    titulo: "National Geographic",
    autor: "Vários Autores",
    anoPublicacao: 2022,
    emprestado: false,
    usuarioEmprestimo: null,
    edicao: "Março",
    entidadeBibliografica: entidadeBibliografica.REVISTA
  },
  {
    codigo: "RN789",
    titulo: "National Geographic",
    autor: "Vários Autores",
    anoPublicacao: 2022,
    emprestado: false,
    usuarioEmprestimo: null,
    edicao: "Março",
    entidadeBibliografica: entidadeBibliografica.REVISTA
  }
];

exports.livros = livros;
