
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.value.trim();

    if (!nomeAmigo) {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nomeAmigo);
    atualizarLista();
    inputAmigo.value = "";
}

// Função para atualizar a lista de amigos no HTML
function atualizarLista() {
    const listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = "";

    amigos.forEach((amigo) => {
        const listItem = document.createElement("li");
        listItem.textContent = amigo;
        listaHTML.appendChild(listItem);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione amigos para realizar o sorteio.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    const resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = `🎉 O amigo sorteado foi: ${amigoSorteado}! 🎉`;
}
