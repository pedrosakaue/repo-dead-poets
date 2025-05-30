var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");
var testeController = require("../controllers/testeController");

router.post("/iniciar/:idUsuario", function (req, res) {
    testeController.iniciarTentativa(req, res);
});

router.post("/registrar", function (req, res) {
    testeController.registrar(req, res);
});

router.get('/dados-grafico/:idUsuario', testeController.dadosGrafico);

router.get('/kpis/:idUsuario', testeController.kpis);

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

module.exports = router;