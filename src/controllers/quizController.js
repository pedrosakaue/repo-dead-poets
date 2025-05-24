var quizModel = require("../models/quizModel");

function iniciarTentativa(req, res) {
    var idUsuario = req.params.idUsuario;

    quizModel.iniciarTentativaQuiz(idUsuario)
        .then((resultado) => {
            res.json(resultado[0]);
        })
        .catch((erro) => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function responder(req, res) {
    var { fkUsuario, fkPergunta, pontuacao, fkTentativa } = req.body;

    if (fkUsuario == undefined || fkPergunta == undefined || pontuacao == undefined || fkTentativa == undefined) {
        res.status(400).send("Campos obrigatórios faltando!");
    } else {
        quizModel.salvarResposta(fkUsuario, fkPergunta, pontuacao, fkTentativa)
            .then((resultado) => {
                res.json(resultado);
            })
            .catch((erro) => {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function buscarResultado(req, res) {
    var idUsuario = req.params.idUsuario;
    var idTentativa = req.params.idTentativa;

    quizModel.buscarResultadoTentativa(idTentativa, idUsuario)
        .then((resultado) => {
            res.json(resultado);
        })
        .catch((erro) => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    iniciarTentativa,
    responder,
    buscarResultado
};
