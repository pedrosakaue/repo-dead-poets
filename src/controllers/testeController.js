var testeModel = require("../models/testeModel");

function iniciarTentativa(req, res) {
    var idUsuario = req.params.idUsuario;

    testeModel.iniciarTentativaTeste(idUsuario)
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
    var fkPersonagem = req.body.fkPersonagem;

    if (fkTentativa == undefined) {
        res.status(400).send("Sua fkTentativa está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Sua fkUsuario está undefined!");
    } else if (fkPersonagem == undefined) {
        res.status(400).send("Sua fkPersonagem está undefined!");
    } else {
        testeModel.registrar(fkTentativa, fkUsuario, fkPersonagem)
            .then((resultado) => {
                res.json(resultado);
            })
            .catch((erro) => {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}


function dadosGrafico(req, res) {
    const idUsuario = req.params.idUsuario;
    testeModel.dadosGrafico(idUsuario)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}


module.exports = {
    iniciarTentativa,
    registrar,
    dadosGrafico
};
