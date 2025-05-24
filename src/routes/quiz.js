var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");
var quizController = require("../controllers/quizController");

router.post("/iniciar/:idUsuario", function (req, res) {
    quizController.iniciarTentativa(req, res);
});

router.post("/responder", function (req, res) {
    quizController.responder(req, res);
});

router.get("/resultado/:idUsuario/:idTentativa", function (req, res) {
    quizController.buscarResultado(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

module.exports = router;
