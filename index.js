const campoSenha = document.getElementById('senha');
const campoTamanho = document.getElementById('campoTamanho');
const maiusculas = document.getElementById('maiusculas');
const minusculas = document.getElementById('minusculas');
const numeros = document.getElementById('numeros');
const simbolos = document.getElementById('simbolos');
const Mensagem = document.getElementById('mensagem');
const GerarSenha = document.getElementById('gerar-senha');
const LimparSenha = document.getElementById('limpar-senha');

GerarSenha.addEventListener('click', gerarSenha);
LimparSenha.addEventListener('click', limparSenha);

function gerarSenha() {
    let caracteres = "";
    const tamanho = parseInt(campoTamanho.value);

    if (isNaN(tamanho) || tamanho < 1 || tamanho > 24) {
        Mensagem.textContent = "Por favor, insira um tamanho válido para a senha (1-24).";
        return;
    }

    if (!maiusculas.checked && !minusculas.checked && !numeros.checked && !simbolos.checked) {
        Mensagem.textContent = "Por favor, selecione pelo menos um tipo de caractere.";
        return;
    }

    if (maiusculas.checked) {
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (minusculas.checked) {
        caracteres += "abcdefghijklmnopqrstuvwxyz";
    }
    if (numeros.checked) {
        caracteres += "0123456789";
    }
    if (simbolos.checked) {
        caracteres += "!@#$%^&*";
    }

    let senha = "";
    for (let i = 0; i < tamanho; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        const caractere = caracteres.charAt(indiceAleatorio);
        senha += caractere;
    }

    campoSenha.value = senha;
    Mensagem.textContent = "";
}

function limparSenha() {
    campoSenha.value = "";
    Mensagem.textContent = "";
    campoTamanho.value = "";
    maiusculas.checked = false;
    minusculas.checked = false;
    numeros.checked = false;
    simbolos.checked = false;
}
