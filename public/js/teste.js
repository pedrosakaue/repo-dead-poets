const questoes = [
        {
            "questao": "Como você reage quando encontra uma situação desafiadora ou quando precisa tomar uma decisão difícil?",
            "resp1": "Busco encontrar uma maneira criativa de lidar com isso, desafiando o status quo.",
            "resp1Total": "1",
            "resp2": "Tento agir com coragem, mesmo que me sinta um pouco nervoso ou inseguro.",
            "resp2Total": "2",
            "resp3": "Sinto que preciso de um empurrãozinho, mas estou disposto a me arriscar.",
            "resp3Total": "3",
            "resp4": "Fico mais confortável com abordagens lógicas e práticas, buscando resolver com a cabeça fria.",
            "resp4Total": "4",
            "resp5": "Costumo agir sem pensar muito nas consequências, mas sempre de forma ousada.",
            "resp5Total": "5",
            "resp6": "Fico um pouco perdido em situações difíceis, mas tento encontrar apoio nos outros.",
            "resp6Total": "6",
            "resp7": "Prefiro seguir as regras e fazer o que é esperado, para evitar complicações.",
            "resp7Total": "7",
            "resp8": "Eu fujo do problema ou tento me esconder do que me incomoda.",
            "resp8Total": "8"
        },
        {
            "questao": "Quando você pensa em seu futuro, como se sente?",
            "resp1": "Vejo muitas possibilidades, mas acredito que o caminho será diferente do que todos esperam.",
            "resp1Total": "1",
            "resp2": "Sinto uma mistura de empolgação e medo, porque sei que terei que lutar para seguir o que quero.",
            "resp2Total": "2",
            "resp3": "Tenho sonhos e estou disposto a lutar por eles, mesmo que não seja fácil.",
            "resp3Total": "3",
            "resp4": "Eu me preocupo bastante com o futuro, mas tento não me deixar consumir pelo medo.",
            "resp4Total": "4",
            "resp5": "Eu tento aproveitar o presente e viver de maneira intensa, sem me preocupar muito com o futuro.",
            "resp5Total": "5",
            "resp6": "Sinto que preciso mais de estabilidade e direção. Isso me deixa mais confortável.",
            "resp6Total": "6",
            "resp7": "Tenho muito medo do que o futuro pode me reservar, mas sei que é inevitável.",
            "resp7Total": "7",
            "resp8": "Eu fico apavorado com o futuro, preferiria que as coisas se resolvessem por si mesmas.",
            "resp8Total": "8"
        },
        {
            "questao": "Como você se comporta em um grupo de amigos?",
            "resp1": "Tento ser o líder, sempre incentivando os outros a pensarem de maneira diferente e única.",
            "resp1Total": "1",
            "resp2": "Sou aquele que dá coragem para os outros se expressarem e tentarem coisas novas.",
            "resp2Total": "2",
            "resp3": "Gosto de ser ativo e provocar mudanças dentro do grupo, mesmo que nem todos me acompanhem.",
            "resp3Total": "3",
            "resp4": "Sou mais quieto e prefiro observar, mas participo quando tenho algo valioso a acrescentar.",
            "resp4Total": "4",
            "resp5": "Sou o mais ousado, tentando fazer os outros se divertirem e quebrando as regras.",
            "resp5Total": "5",
            "resp6": "Tento manter a paz e me encaixar bem, sem causar problemas ou chamar muita atenção.",
            "resp6Total": "6",
            "resp7": "Prefiro me manter calmo e equilibrado, ajudando os outros de maneira mais discreta.",
            "resp7Total": "7",
            "resp8": "Tento agradar a todos, mas muitas vezes fico com medo de ser rejeitado ou não aceito.",
            "resp8Total": "8"
        },
        {
            "questao": "Como você lida com críticas ou desapontamentos?",
            "resp1": "Eu as uso como combustível para melhorar e desafiar ainda mais as expectativas dos outros.",
            "resp1Total": "1",
            "resp2": "Fico bastante afetado, mas tento usar isso como uma oportunidade para crescer.",
            "resp2Total": "2",
            "resp3": "Reajo com frustração, mas logo busco maneiras de mudar e me recuperar.",
            "resp3Total": "3",
            "resp4": "Prefiro processar internamente e talvez repensar o que posso melhorar.",
            "resp4Total": "4",
            "resp5": "Eu tento ignorar e seguir meu caminho, sem me deixar abalar facilmente.",
            "resp5Total": "5",
            "resp6": "Me sinto um pouco derrotado, mas tento esconder isso e seguir em frente.",
            "resp6Total": "6",
            "resp7": "Fico muito chateado e tento evitar situações onde possa ser criticado.",
            "resp7Total": "7",
            "resp8": "Eu me sinto completamente derrotado e muitas vezes recuo para não enfrentar as consequências.",
            "resp8Total": "8"
        },
        {
            "questao": "Se você tivesse que escolher uma atividade que refletisse sua personalidade, qual seria?",
            "resp1": "Algo criativo, onde eu pudesse expressar minhas ideias de maneira única.",
            "resp1Total": "1",
            "resp2": "Algo que me desafiasse a ser corajoso e a lutar por algo que eu acreditasse.",
            "resp2Total": "2",
            "resp3": "Algo estimulante e que me permitisse me destacar dos outros.",
            "resp3Total": "3",
            "resp4": "Algo que me permitisse refletir, aprender e explorar sem pressa.",
            "resp4Total": "4",
            "resp5": "Algo radical e imprevisível, para sair da rotina e me sentir vivo.",
            "resp5Total": "5",
            "resp6": "Algo tranquilo, onde eu pudesse colaborar sem chamar muita atenção.",
            "resp6Total": "6",
            "resp7": "Algo planejado, com regras e estrutura claras, onde eu pudesse ter controle.",
            "resp7Total": "7",
            "resp8": "Algo onde eu pudesse me esconder e ficar longe de qualquer tipo de confronto.",
            "resp8Total": "8"
        },
        {
            "questao": "Quando você se vê em um momento de pressão, qual é sua reação mais comum?",
            "resp1": "Enfrento a pressão de frente e tento transformar o estresse em algo produtivo.",
            "resp1Total": "1",
            "resp2": "Fico nervoso, mas tento manter a calma e usar isso para me impulsionar.",
            "resp2Total": "2",
            "resp3": "Tento encontrar uma maneira criativa de sair da situação e seguir em frente.",
            "resp3Total": "3",
            "resp4": "Tento analisar a situação e pensar nas melhores opções antes de reagir.",
            "resp4Total": "4",
            "resp5": "Tento manter o controle e não me deixar levar pelo nervosismo.",
            "resp5Total": "5",
            "resp6": "Me sinto um pouco sobrecarregado, mas tento pedir ajuda quando necessário.",
            "resp6Total": "6",
            "resp7": "Fico tenso e tento evitar mais problemas, mesmo que isso signifique ceder um pouco.",
            "resp7Total": "7",
            "resp8": "Fico paralisado, sem saber o que fazer, esperando que a situação se resolva por si mesma.",
            "resp8Total": "8"
        },
        {
            "questao": "Como você lida com a autoridade ou com figuras que tentam controlar sua vida?",
            "resp1": "Eu tento desafiar a autoridade e pensar de maneira diferente.",
            "resp1Total": "1",
            "resp2": "Tento lidar com a autoridade com respeito, mas também expresso minhas opiniões.",
            "resp2Total": "2",
            "resp3": "Costumo questionar as regras, mas de maneira mais discreta e com um toque de rebeldia.",
            "resp3Total": "3",
            "resp4": "Eu tento manter a paz e evitar conflitos com figuras de autoridade.",
            "resp4Total": "4",
            "resp5": "Muitas vezes, gosto de testar os limites e ver até onde posso ir.",
            "resp5Total": "5",
            "resp6": "Prefiro evitar confrontos e acatar as regras sem criar grandes problemas.",
            "resp6Total": "6",
            "resp7": "Sigo as regras, mesmo que às vezes me sinta frustrado com elas.",
            "resp7Total": "7",
            "resp8": "Fico com medo de desafiar a autoridade, pois isso pode resultar em consequências negativas.",
            "resp8Total": "8"
        }
    ]

    let questaoAtual = 0;
    let pontos = [];
    const totalQuestoes = questoes.length;

    const container = document.querySelector('.quiz-container');
    const questaoEl = document.querySelector('.questao');
    const option1 = document.querySelector('.option1');
    const option2 = document.querySelector('.option2');
    const option3 = document.querySelector('.option3');
    const option4 = document.querySelector('.option4');
    const option5 = document.querySelector('.option5');
    const option6 = document.querySelector('.option6');
    const option7 = document.querySelector('.option7');
    const option8 = document.querySelector('.option8');
    const nextButton = document.querySelector('.next');
    const previousButton = document.querySelector('.previous');
    const restartButton = document.querySelector('.restart');
    const resultado = document.querySelector('.resultado');

    function gerarQuestoes(index) {
        //Carrega os valores das questões de acordo com o index e respostas selecionadas
        const questao = questoes[index];
        const option1Total = questoes[index].resp1Total;
        const option2Total = questoes[index].resp2Total;
        const option3Total = questoes[index].resp3Total;
        const option4Total = questoes[index].resp4Total;
        const option5Total = questoes[index].resp5Total;
        const option6Total = questoes[index].resp6Total;
        const option7Total = questoes[index].resp7Total;
        const option8Total = questoes[index].resp8Total;
        //Define Data Attributes para as options 
        questaoEl.innerHTML = `${index + 1}. ${questao.questao}`
        option1.setAttribute('data-total', `${option1Total}`);
        option2.setAttribute('data-total', `${option2Total}`);
        option3.setAttribute('data-total', `${option3Total}`);
        option4.setAttribute('data-total', `${option4Total}`);
        option5.setAttribute('data-total', `${option5Total}`);
        option6.setAttribute('data-total', `${option6Total}`);
        option7.setAttribute('data-total', `${option7Total}`);
        option8.setAttribute('data-total', `${option8Total}`);
        option1.innerHTML = `${questao.resp1}`
        option2.innerHTML = `${questao.resp2}`
        option3.innerHTML = `${questao.resp3}`
        option4.innerHTML = `${questao.resp4}`
        option5.innerHTML = `${questao.resp5}`
        option6.innerHTML = `${questao.resp6}`
        option7.innerHTML = `${questao.resp7}`
        option8.innerHTML = `${questao.resp8}`
    }


    function proxQuestao() {
        const optionSelecionada = document.querySelector('input[type="radio"]:checked');
        //Validação de seleção de opção
        if (!optionSelecionada) {
            alert('Escolha uma opção!');
            return;
        }
        //Define como número a Data Attribute da optionSelecionada
        const respScore = Number(optionSelecionada.nextElementSibling.getAttribute('data-total'));

        //Insere na array a resposta selecionada
        pontos.push(respScore);

        //Usando reduce para armazenar os pontos em uma const usando a matemática da função
        const totalPontos = pontos.reduce((total, currentNum) => total + currentNum);

        //Acrescenta o número de questões respondidas.
        questaoAtual++;

        //Limpando a option para próxima questão
        optionSelecionada.checked = false;
        //Muda o botão para finalizar o quiz na última pergunta
        if (questaoAtual == totalQuestoes - 1) {
            nextButton.textContent = 'Finalizar';
        }
        //Quando finalizado, aparecer somente o resultado na tela
        if (questaoAtual == totalQuestoes) {
            container.style.display = 'none';
            if (totalPontos >= 7 && totalPontos <= 12) {
                resultado.innerHTML =
                    `<div class="summary"> 
                        <h2> Seu personagem é:</h2> 
                        <div> 
                            <img src="fotos/keating-pic.png"> 
                        </div> 
                        <div> 
                            <b>🧑‍🏫 Sr. Keating!</b> 
                        </div> 
                        <div> 
                            Professor de literatura não convencional, inspira seus alunos a pensarem por si  
                            mesmos e a viverem intensamente. Com seu lema “Carpe Diem”, encoraja a liberdade  
                            de expressão e o amor pela poesia, sendo a força transformadora na vida dos garotos.     
                        </div> 
                    </div> 
                    <button class="restart">Tentar Novamente</button>`
                } else if (totalPontos >= 13 && totalPontos <= 18) {
                    resultado.innerHTML =
                    `<div class="summary"> 
                        <h2> Seu personagem é:</h2> 
                        <div> 
                            <img src="assets/imgs/neil-pic.png"> 
                        </div> 
                        <div> 
                            <b>🎭 Neil Perry</b> 
                        </div> 
                        <div> 
                            Estudante carismático e apaixonado por artes, especialmente teatro. Vive sob intensa  
                            pressão do pai autoritário, o que o leva a um trágico conflito entre seguir seus sonhos  
                            e obedecer às expectativas familiares.     
                        </div> 
                    </div> 
                    <button class="restart">Tentar Novamente</button>`
                } else if (totalPontos >= 19 && totalPontos <= 24) {
                    resultado.innerHTML =
                        `<div class="summary"> 
                            <h2> Seu personagem é:</h2> 
                            <div> 
                                <img src="assets/imgs/charlie-pic.png"> 
                            </div> 
                            <div> 
                                <b>🎷 Charlie Dalton (Nuwanda)</b> 
                            </div> 
                            <div> 
                                Irreverente e provocador, Charlie adota o nome “Nuwanda” como símbolo de sua rebeldia.  
                                Sempre desafia a autoridade e leva os ideais de liberdade ao extremo, sendo uma figura  
                                ousada e cômica ao mesmo tempo.    
                            </div> 
                        </div> 
                        <button class="restart">Tentar Novamente</button>`
                } else if (totalPontos >= 25 && totalPontos <= 30) {
                    resultado.innerHTML =
                        `<div class="summary"> 
                            <h2> Seu personagem é:</h2> 
                        <div> 
                            <img src="assets/imgs/knox-pic.png"> 
                        </div> 
                        <div> 
                            <b>💌 Knox Overstreet</b> 
                        </div> 
                        <div> 
                            Romântico incorrigível, Knox se apaixona por uma garota e luta para conquistar seu coração. Sua 
                            jornada reflete o desejo de viver intensamente, mesmo diante do medo da rejeição e das convenções sociais.    
                        </div> 
                    </div> 
                    <button class="restart">Tentar Novamente</button>`
                } else if (totalPontos >= 31 && totalPontos <= 36) {
                    resultado.innerHTML =
                        `<div class="summary"> 
                            <h2> Seu personagem é:</h2> 
                            <div> 
                                <img src="assets/imgs/meeks-pic.png"> 
                            </div> 
                            <div> 
                                <b>🧠 Steven Meeks</b> 
                            </div> 
                            <div> 
                            Inteligente e gentil, Meeks é entusiasta de ciência e poesia. É leal ao grupo e participa ativamente 
                            das reuniões do Dead Poets Society, sempre buscando equilíbrio entre rebeldia e responsabilidade.    
                            </div> 
                        </div> 
                        <button class="restart">Tentar Novamente</button>`
                } else if (totalPontos >= 37 && totalPontos <= 42) {
                    resultado.innerHTML =
                        `<div class="summary"> 
                            <h2> Seu personagem é:</h2> 
                            <div> 
                                <img src="assets/imgs/pitts-pic.png"> 
                            </div> 
                            <div> 
                                <b>📚 Pitts</b> 
                            </div> 
                            <div> 
                            Amigo próximo de Meeks, é reservado e calado, mas participa fielmente das reuniões do grupo. 
                            Representa os alunos que encontram força na união e na amizade, mesmo sem estar no centro das 
                            atenções.    
                            </div> 
                        </div> 
                        <button class="restart">Tentar Novamente</button>`
                } else if (totalPontos >= 43 && totalPontos <= 48) {
                    resultado.innerHTML =
                    `<div class="summary"> 
                        <h2> Seu personagem é:</h2> 
                        <div> 
                            <img src="assets/imgs/todd-pic.png"> 
                        </div> 
                        <div> 
                            <b>📓 Todd Anderson</b> 
                        </div> 
                        <div> 
                            Tímido e inseguro, vive à sombra do irmão mais velho. Ao longo do filme, se transforma profundamente 
                            graças ao incentivo de Keating e da amizade com Neil, encontrando sua própria voz e coragem.    
                        </div> 
                    </div> 
                    <button class="restart">Tentar Novamente</button>`
                } else if (totalPontos >= 49 && totalPontos <= 56) {
                    resultado.innerHTML =
                        `<div class="summary">  
                            <h2> Seu personagem é:</h2> 
                            <div> 
                                <img src="assets/imgs/cameron-pic.png"> 
                            </div> 
                            <div> 
                                <b>🎓 Richard Cameron</b> 
                            </div> 
                            <div> 
                                Conservador e obediente, Cameron representa o conformismo e o medo de romper com as regras. No 
                                momento de crise, entrega o grupo para se proteger, tornando-se símbolo da traição à liberdade 
                                proposta por Keating.    
                            </div> 
                        </div> 
                        <button class="restart">Tentar Novamente</button>`
                }
                return;
            }
            gerarQuestoes(questaoAtual);
        }

        //Função para voltar questão
        function questaoAnterior() {
            questaoAtual--;
            //Remove o último elemento da array;
            pontos.pop();
            //Gera a questão
            gerarQuestoes(questaoAtual);
        }

        //Função para reinicar quiz;
        function reiniciarQuiz(x) {
            if (x.target.matches('button')) {

                questaoAtual = 0;
                pontos = [];

                location.reload();
            }

        }

        //Chama as funções de acordo com o clique nos botões
        gerarQuestoes(questaoAtual);
        nextButton.addEventListener('click', proxQuestao);
        previousButton.addEventListener('click', questaoAnterior);
        resultado.addEventListener('click', reiniciarQuiz);
