var database = require("../database/config");

function iniciarTentativaTeste(fkUsuario) {
    var instrucao = `
    INSERT INTO tentativaTeste (fkUsuario) VALUES (${fkUsuario});
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao, [fkUsuario])
        .then((result) => {
            const idTentativa = result.insertId;
            return [{ idTentativa }];
        });
}


function registrar(fkTentativa, fkUsuario, fkPersonagem) {
    var instrucao = `
        INSERT INTO resultadoTeste (fkTentativa, fkUsuario, fkPersonagem)
        VALUES (${fkTentativa}, ${fkUsuario}, ${fkPersonagem});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function dadosGrafico(idUsuario) {
    var instrucao = `
        SELECT t.idTentativa AS tentativa,
            p.nome AS personagem
            FROM tentativaTeste t JOIN resultadoTeste r
                ON t.idTentativa = r.fkTentativa
            JOIN personagem p 
                ON r.fkPersonagem = p.idPersonagem
            WHERE t.fkUsuario = ${idUsuario}
            GROUP BY t.idTentativa
            ORDER BY t.idTentativa DESC;
    `;
    return database.executar(instrucao);
}


module.exports = {
    iniciarTentativaTeste,
    registrar,
    dadosGrafico
};
