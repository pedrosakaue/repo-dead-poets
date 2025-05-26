var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");
var quizController = require("../controllers/quizController");

router.post("/iniciar/:idUsuario", function (req, res) {
    quizController.iniciarTentativa(req, res);
});

router.post("/registrar", function (req, res) {
    quizController.registrar(req, res);
});

router.get('/dados-grafico/:idUsuario', quizController.dadosGrafico);

router.get('/kpis/:idUsuario', quizController.kpis);

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

module.exports = router;
