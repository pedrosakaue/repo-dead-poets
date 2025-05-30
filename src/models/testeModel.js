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
    SELECT r.fkPersonagem AS idPersonagem,
      p.nome AS personagem,
      COUNT(*) AS ocorrencias
    FROM resultadoTeste r JOIN tentativaTeste t 
      ON r.fkTentativa = t.idTentativa
    JOIN personagem p 
      ON r.fkPersonagem = p.idPersonagem
    WHERE t.fkUsuario = ${idUsuario}
    GROUP BY r.fkPersonagem;
  `;
    return database.executar(instrucao);
}


function ultimoPersonagem(idUsuario) {
  var instrucao = `
    SELECT r.fkPersonagem AS idPersonagem,
      p.nome AS personagem
    FROM resultadoTeste r JOIN tentativaTeste t 
      ON r.fkTentativa = t.idTentativa
    JOIN personagem p 
      ON r.fkPersonagem = p.idPersonagem
    WHERE t.fkUsuario = ${idUsuario}
    ORDER BY t.idTentativa DESC
    LIMIT 1;
  `;
  return database.executar(instrucao);
}


function totalTentativas(idUsuario) {
    var instrucao = `
    SELECT COUNT(*) AS total
    FROM tentativaTeste
    WHERE fkUsuario = ${idUsuario};
  `;
    return database.executar(instrucao);
}


module.exports = {
    iniciarTentativaTeste,
    registrar,
    dadosGrafico,
    ultimoPersonagem,
    totalTentativas
};
