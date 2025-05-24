var database = require("../database/config");

function iniciarTentativaQuiz(fkUsuario) {
    const instrucao = `
    INSERT INTO tentativaQuiz (fkUsuario) VALUES (${fkUsuario});
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao, [fkUsuario])
        .then((result) => {
            const idTentativa = result.insertId;
            return [{ idTentativa }];
        });
}



function registrar(fkTentativa, fkUsuario, fkPergunta, pontuacao) {
    var instrucao = `
        INSERT INTO resultadoQuiz (fkTentativa, fkUsuario, fkPergunta, pontuacao)
        VALUES (${fkTentativa}, ${fkUsuario}, ${fkPergunta}, ${pontuacao});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    iniciarTentativaQuiz,
    registrar
};
