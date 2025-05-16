const listaDeQuestoes = [

        {
            pergunta: "Qual o nome do professor que inspira os alunos com poesia?",
            alternativaA: "Sr. Perry",
            alternativaB: "Sr. Nolan",
            alternativaC: "Sr. Keating",
            alternativaD: "Sr. Dalton",
            alternativaCorreta: "alternativaC"
        },

        {
            pergunta: "Em qual escola se passa o filme?",
            alternativaA: "Academia Welton",
            alternativaB: "Escola Ravenwood",
            alternativaC: "Colégio Whitman",
            alternativaD: "Instituto Emerson",
            alternativaCorreta: "alternativaA"
        },

        {
            pergunta: "Qual é o lema em latim que o professor Keating enfatiza?",
            alternativaA: "Veni, Vidi, Vici",
            alternativaB: "Carpe Diem",
            alternativaC: "Cogito Ergo Sum",
            alternativaD: "Amor Fati",
            alternativaCorreta: "alternativaB"
        },

        {
            pergunta: "O que significa 'Carpe Diem', conforme o filme enfatiza?",
            alternativaA: "Ame a vida",
            alternativaB: "Aproveite o dia",
            alternativaC: "Viva sem medo",
            alternativaD: "Escolha seus sonhos",
            alternativaCorreta: "alternativaB"
        },

        {
            pergunta: "Qual personagem deseja ser ator, contrariando o pai?",
            alternativaA: "Todd Anderson",
            alternativaB: "Neil Perry",
            alternativaC: "Knox Overstreet",
            alternativaD: "Charlie Dalton",
            alternativaCorreta: "alternativaB"
        },

        {
            pergunta: "O que os alunos fazem para reviver a 'Sociedade dos Poetas Mortos'?",
            alternativaA: "Criam um clube literário oficial",
            alternativaB: "Participam de concursos de poesia",
            alternativaC: "Reúnem-se secretamente na caverna para ler poesia",
            alternativaD: "Enviam cartas a poetas famosos",
            alternativaCorreta: "alternativaC"
        },

        {
            pergunta: "O que Todd Anderson faz no final do filme como forma de protesto?",
            alternativaA: "Enfrenta o diretor",
            alternativaB: "Grita com Keating",
            alternativaC: "Sobe na mesa e diz 'Oh Captain! My Captain!'",
            alternativaD: "Rasga seu boletim",
            alternativaCorreta: "alternativaC"
        },

        {
            pergunta: "Quem entrega a folha com assinaturas para expulsar Keating?",
            alternativaA: "Neil Perry",
            alternativaB: "Richard Cameron",
            alternativaC: "Steven Meeks",
            alternativaD: "Gerard Pitts",
            alternativaCorreta: "alternativaB"
        },

        {
            pergunta: "O que representa a cena dos alunos subindo nas mesas?",
            alternativaA: "Rebeldia contra a escola",
            alternativaB: "Tentativa de chamar atenção",
            alternativaC: "Revolta contra os pais",
            alternativaD: "Um ato de homenagem a Keating e à liberdade de pensamento",
            alternativaCorreta: "alternativaD"
        },

        {
            pergunta: "Qual desses temas é central no filme?",
            alternativaA: "Liberdade de expressão e identidade pessoal",
            alternativaB: "Corrupção escolar",
            alternativaC: "Romance adolescente",
            alternativaD: "Progresso tecnológico",
            alternativaCorreta: "alternativaA"
        }

    ]

    // variáveis globais    
    let numeroDaQuestaoAtual = 0
    let pontuacaoFinal = 0
    let tentativaIncorreta = 0
    let certas = 0
    let erradas = 0
    let quantidadeDeQuestoes = listaDeQuestoes.length
    // let isUltima = numeroDaQuestaoAtual == quantidadeDeQuestoes-1 ? true : false

    function onloadEsconder() {
        document.getElementById('pontuacao').style.display = "none"
        document.getElementById('jogo').style.display = "none"
    }

    function iniciarQuiz() {
        document.getElementById('pontuacao').style.display = "flex"
        document.getElementById('jogo').style.display = "flex"
        document.getElementById('btnIniciarQuiz').style.display = "none"

        document.getElementById('qtdQuestoes').innerHTML = quantidadeDeQuestoes

        preencherHTMLcomQuestaoAtual(0)

        btnSubmeter.disabled = false
        btnProx.disabled = true
        // btnConcluir.disabled = true
        btnTentarNovamente.disabled = true
    }

    function preencherHTMLcomQuestaoAtual(index) {
        habilitarAlternativas(true)
        const questaoAtual = listaDeQuestoes[index]
        numeroDaQuestaoAtual = index
        console.log("questaoAtual")
        console.log(questaoAtual)
        document.getElementById("spanNumeroDaQuestaoAtual").innerHTML = Number(index) + 1 // ajustando porque o index começa em 0
        document.getElementById("spanQuestaoExibida").innerHTML = questaoAtual.pergunta;
        document.getElementById("labelOpcaoUm").innerHTML = questaoAtual.alternativaA;
        document.getElementById("labelOpcaoDois").innerHTML = questaoAtual.alternativaB;
        document.getElementById("labelOpcaoTres").innerHTML = questaoAtual.alternativaC;
        document.getElementById("labelOpcaoQuatro").innerHTML = questaoAtual.alternativaD;
    }

    function submeter() {
        const options = document.getElementsByName("option"); // recupera alternativas no html

        let hasChecked = false
        for (let i = 0; i < options.length; i++) {
            if (options[i].checked) {
                hasChecked = true
                break
            }
        }

        if (!hasChecked) {
            alert("Não há alternativas escolhidas. Escolha uma opção.")
        } else {
            btnSubmeter.disabled = true
            btnProx.disabled = false

            habilitarAlternativas(false)

            checarResposta()
        }
    }

    function habilitarAlternativas(trueOrFalse) {
        let opcaoEscolhida = trueOrFalse ? false : true

        primeiraOpcao.disabled = opcaoEscolhida
        segundaOpcao.disabled = opcaoEscolhida
        terceiraOpcao.disabled = opcaoEscolhida
        quartaOpcao.disabled = opcaoEscolhida

    }

    function avancar() {
        btnProx.disabled = true
        btnSubmeter.disabled = false

        desmarcarRadioButtons()

        if (numeroDaQuestaoAtual < quantidadeDeQuestoes - 1) {
            preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual)
        } else if (numeroDaQuestaoAtual == quantidadeDeQuestoes - 1) {
            alert("Atenção... a próxima é a ultima questão!")
            preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual)
        } else {
            finalizarJogo()
        }
        limparCoresBackgroundOpcoes()
    }

    function tentarNovamente() {
        // atualiza a página
        window.location.reload()
    }

    function checarResposta() {
        const questaoAtual = listaDeQuestoes[numeroDaQuestaoAtual] // questão atual 
        const respostaQuestaoAtual = questaoAtual.alternativaCorreta // qual é a resposta correta da questão atual

        const options = document.getElementsByName("option"); // recupera alternativas no html

        let alternativaCorreta = null // variável para armazenar a alternativa correta

        options.forEach((option) => {
            if (option.value === respostaQuestaoAtual) {
                console.log("alternativaCorreta está no componente: " + alternativaCorreta)
                alternativaCorreta = option.labels[0].id
            }
        })

        // verifica se resposta assinalada é correta
        options.forEach((option) => {
            if (option.checked === true && option.value === respostaQuestaoAtual) {
                document.getElementById(alternativaCorreta).classList.add("text-success-with-bg")
                pontuacaoFinal++
                certas++
                document.getElementById("spanCertas").innerHTML = certas
                numeroDaQuestaoAtual++
            } else if (option.checked && option.value !== respostaQuestaoAtual) {
                const wrongLabelId = option.labels[0].id

                document.getElementById(wrongLabelId).classList.add("text-danger-with-bg")
                document.getElementById(alternativaCorreta).classList.add("text-success-with-bg")
                tentativaIncorreta++
                erradas++
                document.getElementById("spanErradas").innerHTML = erradas
                numeroDaQuestaoAtual++
            }
        })
    }

    function limparCoresBackgroundOpcoes() {
        const options = document.getElementsByName("option");
        options.forEach((option) => {
            document.getElementById(option.labels[0].id).classList.remove("text-danger-with-bg")
            document.getElementById(option.labels[0].id).classList.remove("text-success-with-bg")
        })
    }

    function desmarcarRadioButtons() {
        const options = document.getElementsByName("option");
        for (let i = 0; i < options.length; i++) {
            options[i].checked = false;
        }
    }

    function finalizarJogo() {
        let textoParaMensagemFinal = null
        let classComCoresParaMensagemFinal = null
        const porcentagemFinalDeAcertos = pontuacaoFinal / quantidadeDeQuestoes

        if (porcentagemFinalDeAcertos <= 0.3) {
            textoParaMensagemFinal = "Precisa melhorar para se tornar um poeta!"
            classComCoresParaMensagemFinal = "text-danger-with-bg"
        }
        else if (porcentagemFinalDeAcertos > 0.3 && porcentagemFinalDeAcertos < 0.9) {
            textoParaMensagemFinal = "Quase um poeta, hein!"
            classComCoresParaMensagemFinal = "text-warning-with-bg"
        }
        else if (porcentagemFinalDeAcertos >= 0.9) {
            textoParaMensagemFinal = "Um verdadeiro poeta!"
            classComCoresParaMensagemFinal = "text-success-with-bg"
        }

        textoParaMensagemFinal += "<br> Você acertou " + Math.round((porcentagemFinalDeAcertos) * 100) + "% das questões."


        document.getElementById('msgFinal').innerHTML = textoParaMensagemFinal
        document.getElementById('msgFinal').classList.add(classComCoresParaMensagemFinal)
        document.getElementById('spanPontuacaoFinal').innerHTML = pontuacaoFinal

        document.getElementById('jogo').classList.add("text-new-gray")

        btnProx.disabled = true
        btnSubmeter.disabled = true
        // btnConcluir.disabled = true
        btnTentarNovamente.disabled = false

    }