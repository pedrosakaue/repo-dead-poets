var database = require("../database/config");

function iniciarTentativaQuiz(fkUsuario) {
    var instrucao = `
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


function dadosGrafico(idUsuario) {
    var instrucao = `
        SELECT t.idTentativa AS tentativa,
            SUM(r.pontuacao)  AS acertos
            FROM tentativaQuiz t JOIN resultadoQuiz r
                ON t.idTentativa = r.fkTentativa
            WHERE t.fkUsuario = ${idUsuario}
            GROUP BY t.idTentativa
            ORDER BY t.idTentativa DESC;
    `;
    return database.executar(instrucao);
}


function totalTentativas(idUsuario) {
    var instrucao = `
    SELECT COUNT(*) AS total
    FROM tentativaQuiz
    WHERE fkUsuario = ${idUsuario};
  `;
    return database.executar(instrucao);
}


function mediaAcertos(idUsuario) {
    var instrucao = `
    SELECT ROUND(SUM(r.pontuacao) / (COUNT(DISTINCT(r.fkTentativa)) * 10) * 100, 2) AS mediaPorcentagem
	FROM resultadoQuiz r JOIN tentativaQuiz t 
		ON r.fkTentativa = t.idTentativa
    WHERE r.fkUsuario = ${idUsuario};
  `;
    return database.executar(instrucao);
}


module.exports = {
    iniciarTentativaQuiz,
    registrar,
    dadosGrafico,
    totalTentativas,
    mediaAcertos
};
