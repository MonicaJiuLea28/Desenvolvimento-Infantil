var livroModel = require("../models/livroModel");

function procurarLivros(req, res) {
  var idLivro = req.params.idLivro;

  livroModel.procurarLivros(idLivro)
    .then(
      function (resultadoAutenticar) {
        console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
        console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

          console.log(resultadoAutenticar);
          res.json({
            quantidadePesquisas: resultadoAutenticar[0].quantidadePesquisas
          });
      }
    ).catch(
      function (erro) {
        console.log(erro);
        console.log("\nHouve um erro ao procurar os livros! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      }
    );
}


function alterarPesquisa(req, res) {
  var idLivro = req.params.idLivro;

  livroModel.alterarPesquisa(idLivro)
    .then(
      function (resultadoAutenticar) {
        console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
        console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String
      }
    ).catch(
      function (erro) {
        console.log(erro);
        console.log("\nHouve um erro ao procurar os livros! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      }
    );
}


module.exports = {
  procurarLivros,
  alterarPesquisa
};
