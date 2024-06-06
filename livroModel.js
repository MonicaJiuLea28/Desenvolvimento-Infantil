var database = require("../database/config");

function procurarLivros(idLivro) {
  var instrucaoSql = `select quantidadePesquisas from Livro where idLivro = ${idLivro};`;

  return database.executar(instrucaoSql);
}

function alterarPesquisa(idLivro) {
  var instrucaoSql = `update Livro set quantidadePesquisas = quantidadePesquisas + 1 where idLivro = ${idLivro};`;

  return database.executar(instrucaoSql);
}

module.exports = { procurarLivros, alterarPesquisa };
