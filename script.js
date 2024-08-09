const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Olá! Você gostaria de responder algumas perguntas? Desde já agradecemos pela sua colaboração! :)",
        alternativas: [
            {
                texto: "Sim!",
                afirmacao: "Sua"
            },
            {
                texto: "Claro!",
                afirmacao: "Sua"
            }
        ]
    },
    {
        enunciado: "Como é o lugar onde você mora?",
        alternativas: [
            {
                texto: "Meio urbano",
                afirmacao: "colaboração"
            },
            {
                texto: "Meio rural",
                 afirmacao: "colaboração"
            },
            {
                texto: "Outro",
                 afirmacao: "colaboração"
            }
        ]
    },
    {
        enunciado: "Qual a sua opinião sobre os avanços na tecnologia atual (inteligência artificial, automação das máquinas na indústria e no meio agrícola, entre outros)?",
        alternativas: [
            {
                texto: "Defendo a ideia de que a tecnologia pode criar novas oportunidades de emprego e aumentar a produtividade em geral.",
                afirmacao: "é"
            },
            {
                texto: "Estou preocupado com o que as pessoas são capazes de fazer com a ajuda da inteligência artificial e temo que as pessoas percam seus empregos para as máquinas.",
                afirmacao: "é"
            },
            {
                texto: "Acredito que a tecnologia tem sempre seus pontos positivos e negativos, e que existe um equilíbrio entre eles.",
                afirmacao: "é"
            }
        ]
    },
    {
        enunciado: "Qual é a sua faixa etária?",
        alternativas: [
            {
                texto: "12 anos ou menos",
                afirmacao: "muito importante"
            },
            {
                texto: "Entre 13 e 17 anos",
                afirmacao: "muito importante"
            },
            {
                texto: "Entre 18 e 29 anos",
                afirmacao: "muito importante"
            },
            {
                texto: "30 anos ou mais",
                afirmacao: "muito importante"
            }
        ]
    },
    {
        enunciado: "Você possui acesso à tecnologia em seu cotidiano?",
        alternativas: [
            {
                texto: "Sim, frequentemente.",
                afirmacao: "para nós!"
            },
            {
                texto: "Às vezes.",
                afirmacao: "para nós!"
            },
            {
                texto: "Nunca ou raramente.",
                afirmacao: "para nós!"
            }
            
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Agradecemos a sua participação!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
