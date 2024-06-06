var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

 router.get("/tempo-real/:idUsuario", function (req, res) {
     medidaController.buscarMedidasEmTempoReal(req, res);
 })

module.exports = router;

//  router.get("/ultimas2/:idUsuario", function (req, res) {
//      medidaController.buscarUltimasMedidas2(req, res);
//  });

//   router.get("/tempo-real2/:idUsuario", function (req, res) {
//       medidaController.buscarMedidasEmTempoReal2(req, res);
//   })

//   module.exports = router;

//  router.get("/ultimas3/:idUsuario", function (req, res) {
//      medidaController.buscarUltimasMedidas3(req, res);
//  });

//   router.get("/tempo-real3/:idUsuario", function (req, res) {
//       medidaController.buscarMedidasEmTempoReal3(req, res);
//   })

//   module.exports = router;