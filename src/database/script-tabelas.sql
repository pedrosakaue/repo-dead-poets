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
	descricao VARCHAR(300)
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

INSERT INTO personagem (nome, descricao) VALUES
("Sr. Keating", "Professor de literatura não convencional, inspira seus alunos a pensarem por si mesmos e a viverem intensamente. Com seu lema 
“Carpe Diem”, encoraja a liberdade de expressão e o amor pela poesia, sendo a força transformadora na vida dos garotos."),
("Neil Perry", "Estudante carismático e apaixonado por artes, especialmente teatro. Vive sob intensa pressão do pai autoritário, o que o leva 
a um trágico conflito entre seguir seus sonhos e obedecer às expectativas familiares."),
("Charlie Dalton", "Irreverente e provocador, Charlie adota o nome “Nuwanda” como símbolo de sua rebeldia. Sempre desafia a autoridade e leva 
os ideais de liberdade ao extremo, sendo uma figura ousada e cômica ao mesmo tempo."),
("Knox Overstreet", "Romântico incorrigível, Knox se apaixona por uma garota e luta para conquistar seu coração. Sua jornada reflete o desejo 
de viver intensamente, mesmo diante do medo da rejeição e das convenções sociais."),
("Steven Meeks", "Inteligente e gentil, Meeks é entusiasta de ciência e poesia. É leal ao grupo e participa ativamente das reuniões do Dead 
Poets Society, sempre buscando equilíbrio entre rebeldia e responsabilidade."),
("Gerard Pitts", "Amigo próximo de Meeks, é reservado e calado, mas participa fielmente das reuniões do grupo. Representa os alunos que encontram 
força na união e na amizade, mesmo sem estar no centro das atenções."),
("Todd Anderson", "Tímido e inseguro, vive à sombra do irmão mais velho. Ao longo do filme, se transforma profundamente graças ao incentivo de 
Keating e da amizade com Neil, encontrando sua própria voz e coragem."),
("Richard Cameron", "Conservador e obediente, Cameron representa o conformismo e o medo de romper com as regras. No momento de crise, entrega 
o grupo para se proteger, tornando-se símbolo da traição à liberdade proposta por Keating.");
