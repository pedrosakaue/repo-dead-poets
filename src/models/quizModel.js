var database = require("../database/config");

function iniciarTentativaQuiz(fkUsuario) {
    var instrucao = `
        INSERT INTO tentativaQuiz (fkUsuario) VALUES (${fkUsuario});
    `;
    console.log("Executando SQL: " + instrucao);

    return database.executar(instrucao).then(() => {
        var instrucaoId = `
            SELECT LAST_INSERT_ID() AS idTentativa;
        `;
        console.log("Buscando ID da tentativa: " + instrucaoId);
        return database.executar(instrucaoId);
    });
}



function salvarResposta(fkUsuario, fkPergunta, pontuacao, fkTentativa) {
    var instrucao = `
        INSERT INTO resultadoQuiz (fkUsuario, fkPergunta, pontuacao, fkTentativa)
        VALUES (${fkUsuario}, ${fkPergunta}, ${pontuacao}, ${fkTentativa});
    `;
    console.log("↪️ Salvando resposta no banco:", instrucao.trim());
    return database.executar(instrucao);
}

function buscarResultadoTentativa(fkTentativa, fkUsuario) {
    var instrucao = `
        SELECT * FROM resultadoQuiz r JOIN pergunta p
            ON r.fkPergunta = p.idPergunta
        JOIN tentativaQuiz t 
            ON r.fkTentativa = t.idTentativa 
        JOIN usuario u 
            ON r.fkUsuario = u.id 
        WHERE fkTentativa = ${fkTentativa} AND fkUsuario = ${fkUsuario};
    `;
    return database.executar(instrucao);
}

module.exports = {
    iniciarTentativaQuiz,
    salvarResposta,
    buscarResultadoTentativa
};
