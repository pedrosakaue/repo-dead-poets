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


function registrar(req, res) {
    var fkTentativa = req.body.fkTentativa;
    var fkUsuario = req.body.fkUsuario;
    var fkPergunta = req.body.fkPergunta;
    var pontuacao = req.body.pontuacao;

    if (fkTentativa == undefined) {
        res.status(400).send("Sua fkTentativa está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Sua fkUsuario está undefined!");
    } else if (fkPergunta == undefined) {
        res.status(400).send("Sua fkPergunta está undefined!");
    } else if (pontuacao == undefined) {
        res.status(400).send("Sua pontuação está undefined!");
    } else {
        quizModel.registrar(fkTentativa, fkUsuario, fkPergunta, pontuacao)
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

    quizModel.buscarResultadoTentativa(idUsuario)
        .then((resultado) => {
            res.json(resultado);
        })
        .catch((erro) => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}


function dadosGrafico(req, res) {
    const idUsuario = req.params.idUsuario;
    quizModel.dadosGrafico(idUsuario)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}


function dadosTempoReal(req, res) {
    const idUsuario = req.params.idUsuario;
    quizModel.dadosTempoReal(idUsuario)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}


function kpis(req, res) {
    const idUsuario = req.params.idUsuario;

    Promise.all([ 
        quizModel.totalTentativas(idUsuario),
        quizModel.mediaAcertos(idUsuario)
    ]).then(([resultadoTotalTent, resultadoMedia]) => {
            const total = resultadoTotalTent[0].total || 0; // or usado pra nao receber undefined
            const media = resultadoMedia[0].mediaPorcentagem || 0;
            res.json({ totalTentativas: total, mediaAcertos: media });
        }).catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}


module.exports = {
    iniciarTentativa,
    registrar,
    buscarResultado,
    dadosGrafico,
    dadosTempoReal,
    kpis
};
