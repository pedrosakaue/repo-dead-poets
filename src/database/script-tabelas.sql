CREATE DATABASE db_deadpoets;

USE db_deadpoets;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50) UNIQUE,
	senha VARCHAR(50)
);

CREATE TABLE pergunta (
	idPergunta INT PRIMARY KEY AUTO_INCREMENT,
	pergunta VARCHAR(100)
);

CREATE TABLE personagem (
	idPersonagem INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	descricao VARCHAR(120)
);

CREATE TABLE tentativaQuiz (
	idTentativa INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    dtInicio DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fkUsuarioTentativaQuiz
		FOREIGN KEY (fkUsuario)
			REFERENCES usuario(id)
);

CREATE TABLE tentativaTeste (
	idTentativa INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    dtInicio DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fkUsuarioTentativaTeste
		FOREIGN KEY (fkUsuario)
			REFERENCES usuario(id)
);

CREATE TABLE resultadoTeste (
	fkTentativa INT,
	fkUsuario INT,
	fkPersonagem INT,
	CONSTRAINT pkComposta1
		PRIMARY KEY (fkTentativa, fkUsuario, fkPersonagem),
	CONSTRAINT fkTentativaResultadoTeste
		FOREIGN KEY (fkTentativa)
			REFERENCES tentativaTeste(idTentativa),
	CONSTRAINT fkPersonagemTeste
		FOREIGN KEY (fkPersonagem)
			REFERENCES personagem(idPersonagem),
	CONSTRAINT fkUsuarioTeste
		FOREIGN KEY (fkUsuario) 
			REFERENCES usuario(id)
);

CREATE TABLE resultadoQuiz (
	fkTentativa INT,
	fkUsuario INT,
	fkPergunta INT,
	CONSTRAINT pkComposta2
		PRIMARY KEY (fkTentativa, fkUsuario, fkPergunta),
	pontuacao INT,
	CONSTRAINT chkPontuacao
		CHECK (pontuacao IN(0, 1)),
	dtRegistro DATETIME DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT fkTentativaResultadoQuiz
		FOREIGN KEY (fkTentativa)
			REFERENCES tentativaQuiz(idTentativa),
	CONSTRAINT fkUsuarioResultadoQuiz 
		FOREIGN KEY (fkUsuario)
			REFERENCES usuario(id),
	CONSTRAINT fkPerguntaResultadoQuiz
		FOREIGN KEY (fkPergunta)
			REFERENCES pergunta(idPergunta)
);

INSERT INTO pergunta (pergunta) VALUES
("Qual o nome do professor que inspira os alunos com poesia?"),
("Em qual escola se passa o filme?"),
("Qual é o lema em latim que o professor Keating enfatiza?"),
("O que significa 'Carpe Diem', conforme o filme enfatiza?"),
("Qual personagem deseja ser ator, contrariando o pai?"),
("O que os alunos fazem para reviver a 'Sociedade dos Poetas Mortos'?"),
("O que Todd Anderson faz no final do filme como forma de protesto?"),
("Quem entrega a folha com assinaturas para expulsar Keating?"),
("O que representa a cena dos alunos subindo nas mesas?"),
("Qual desses temas é central no filme?");