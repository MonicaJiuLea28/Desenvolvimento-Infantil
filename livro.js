var express = require("express");
var router = express.Router();

var livroController = require("../controllers/livroController");

router.get("/procurarLivros/:idLivro", function (req, res) {
  livroController.procurarLivros(req, res);
});

router.put("/alterarPesquisa/:idLivro", function (req, res) {
  livroController.alterarPesquisa(req, res);
});

module.exports = router;