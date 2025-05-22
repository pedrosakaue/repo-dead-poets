CREATE DATABASE db_deadpoets;

USE db_deadpoets;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50) UNIQUE,
	senha VARCHAR(50)
);

CREATE TABLE quiz (
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
	acertos INT,
	fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
);

CREATE TABLE personagem (
	idPersonagem INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	descricao VARCHAR(120),
	tracoPersonalidade VARCHAR(45)
);

CREATE TABLE teste (
	idTeste INT AUTO_INCREMENT,
	fkPersonagem INT,
	CONSTRAINT pkComposta
		PRIMARY KEY (idTeste, fkPersonagem),
	fkUsuario INT,
	CONSTRAINT fkPersonagemTeste
		FOREIGN KEY (fkPersonagem)
			REFERENCES personagem(idPersonagem),
	CONSTRAINT fkUsuarioTeste
		FOREIGN KEY (fkUsuario) 
			REFERENCES usuario(id)
);