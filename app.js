let listaDeNumerosSorteados = [];
let numeroLimite = 3;
let numeroEscolhido;
let numeroSecreto = gerarNumeroSecreto();
let chute;
let tentativas = 1;

function gerarNumeroSecreto() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDaLista = listaDeNumerosSorteados.length;
    if (quantidadeDaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroSecreto();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(numeroEscolhido);
        return numeroEscolhido;
    };
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function verificarChute() {
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativas}`
    chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!')
        exibirTextoNaTela('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chute').setAttribute('disabled', true);
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor, tente novamente!')
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior, tente novamente!')
        }
        tentativas++;
        limparCampo();
    }
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroSecreto();
    tentativas = 1;
    mensagemInicial();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('chute').removeAttribute('disabled');
}

mensagemInicial();