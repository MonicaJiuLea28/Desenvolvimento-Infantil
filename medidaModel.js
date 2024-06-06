var database = require("../database/config");

function buscarUltimasMedidas() {

    var instrucaoSql = `SELECT 
        idade,genero from Crianca`;
        

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

 function buscarMedidasEmTempoReal() {

    var instrucaoSql = `SELECT 
    idade,genero from Crianca`;

     console.log("Executando a instrução SQL: \n" + instrucaoSql);
     return database.executar(instrucaoSql);
 }

module.exports = {
    buscarUltimasMedidas,
     buscarMedidasEmTempoReal
}

//  function buscarUltimasMedidas2() {

//      var instrucaoSql = `SELECT 
//          genero from Crianca`;

//      console.log("Executando a instrução SQL: \n" + instrucaoSql);
//      return database.executar(instrucaoSql);
//  }

//  function buscarMedidasEmTempoReal2() {

//      var instrucaoSql = `SELECT 
//      genero from Crianca`;

//       console.log("Executando a instrução SQL: \n" + instrucaoSql);
//       return database.executar(instrucaoSql);
//   }

//   module.exports = {
//      buscarUltimasMedidas2,
//       buscarMedidasEmTempoReal2
//  }





  function buscarUltimasMedidas3() {

      var instrucaoSql = `SELECT 
          qtdlivro from Livro`;

      console.log("Executando a instrução SQL: \n" + instrucaoSql);
      return database.executar(instrucaoSql);
  }

  function buscarMedidasEmTempoReal3() {

      var instrucaoSql = `SELECT 
      qtdLivro from Livro`;

       console.log("Executando a instrução SQL: \n" + instrucaoSql);
       return database.executar(instrucaoSql);
   }

//    module.exports = {
//       buscarUltimasMedidas3,
//        buscarMedidasEmTempoReal3
//   }