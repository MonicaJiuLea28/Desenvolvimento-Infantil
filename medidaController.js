var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    // const limite_linhas = 7;

    // var idadeCrianca = req.params.idade;

    // var idAquario = req.params.idAquario;

    // console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


 function buscarMedidasEmTempoReal(req, res) {

      var idUsuario = req.params.idUsuario;

     console.log(`Recuperando medidas em tempo real`);

     medidaModel.buscarMedidasEmTempoReal(idUsuario).then(function (resultado) {
         if (resultado.length > 0) {
             res.status(200).json(resultado);
         } else {
             res.status(204).send("Nenhum resultado encontrado!")
         }
     }).catch(function (erro) {
         console.log(erro);
         console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
         res.status(500).json(erro.sqlMessage);
     });
 }

module.exports = {
    buscarUltimasMedidas,
     buscarMedidasEmTempoReal

}

//  function buscarUltimasMedidas2(req, res) {

    
//      var idUsuario = req.params.idUsuario;

//      medidaModel.buscarUltimasMedidas2(idUsuario).then(function (resultado) {
//          if (resultado.length > 0) {
//              res.status(200).json(resultado);
//          } else {
//              res.status(204).send("Nenhum resultado encontrado!")
//          }
//      }).catch(function (erro) {
//          console.log(erro);
//          console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
//          res.status(500).json(erro.sqlMessage);
//      });
//  }

//  function buscarMedidasEmTempoReal2(req, res) {

//      var idUsuario = req.params.idUsuario;

//     console.log(`Recuperando medidas em tempo real`);

//     medidaModel.buscarMedidasEmTempoReal2(idUsuario).then(function (resultado) {
//         if (resultado.length > 0) {
//             res.status(200).json(resultado);
//         } else {
//             res.status(204).send("Nenhum resultado encontrado!")
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//         console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
//         res.status(500).json(erro.sqlMessage);
//     });
//  }

//  module.exports = {
//      buscarUltimasMedidas2,
//       buscarMedidasEmTempoReal2

//  }





  function buscarUltimasMedidas3(req, res) {

    
      var idLivro = req.params.idLivro;

      medidaModel.buscarUltimasMedidas3(idLivro).then(function (resultado) {
          if (resultado.length > 0) {
              res.status(200).json(resultado);
          } else {
              res.status(204).send("Nenhum resultado encontrado!")
          }
      }).catch(function (erro) {
          console.log(erro);
          console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
          res.status(500).json(erro.sqlMessage);
      });
  }

  function buscarMedidasEmTempoReal3(req, res) {

      var idLivro = req.params.idLivro;

     console.log(`Recuperando medidas em tempo real`);

     medidaModel.buscarMedidasEmTempoReal3(idLivro).then(function (resultado) {
         if (resultado.length > 0) {
             res.status(200).json(resultado);
         } else {
             res.status(204).send("Nenhum resultado encontrado!")
         }
     }).catch(function (erro) {
         console.log(erro);
         console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
         res.status(500).json(erro.sqlMessage);
     });
  }

//   module.exports = {
//       buscarUltimasMedidas3,
//        buscarMedidasEmTempoReal3

//   }