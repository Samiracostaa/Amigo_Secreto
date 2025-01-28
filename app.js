// =========================
// DESAFIO: Lista de Amigos
// Objetivo: Desenvolver lógica de programação para gerenciar uma lista de amigos e sortear um deles aleatoriamente.
// =========================

// Variável para armazenar os nomes dos amigos
let amigos = [];

// =========================
// Função: Adicionar Amigo
// Objetivo: Adiciona um amigo à lista, verificando duplicatas e campos vazios.
// =========================
function adicionarAmigo() {
  const amigoInput = document.getElementById("amigo").value.trim(); // Obtém o valor do campo de entrada e remove espaços em branco.

  // Validação: Checar se o campo está vazio
  if (amigoInput === "") {
    alert("Por favor, insira um nome"); // Alerta caso o campo esteja vazio
    return; // Encerra a execução da função
  }

  // Validação: Evitar duplicatas na lista
  if (amigos.includes(amigoInput)) {
    alert("Este amigo já foi adicionado!"); // Alerta se o nome já está na lista
    return; // Encerra a execução da função
  }

  // Adiciona o nome à lista, limpa o campo de entrada e atualiza a exibição da lista
  amigos.push(amigoInput);
  limparEntrada(); // Reseta o campo de texto para entrada
  mostrarAmigos(); // Atualiza a interface com a nova lista de amigos
}

// =========================
// Função: Limpar Entrada
// Objetivo: Reseta o campo de entrada do formulário.
// =========================
function limparEntrada() {
  document.getElementById("amigo").value = ""; // Define o campo de texto como vazio
}

// =========================
// Função: Mostrar Amigos
// Objetivo: Exibe a lista de amigos na interface.
// =========================
function mostrarAmigos() {
  const listaAmigos = document.getElementById("listaAmigos"); // Seleciona o elemento HTML da lista
  listaAmigos.innerHTML = ""; // Reseta o conteúdo do elemento para evitar duplicações

  // Cria e adiciona um item de lista (<li>) para cada amigo
  amigos.forEach((amigo) => {
    const li = document.createElement("li"); // Cria um novo elemento de lista
    li.textContent = amigo; // Define o conteúdo como o nome do amigo
    listaAmigos.appendChild(li); // Adiciona o item à lista exibida
  });
}

// =========================
// Função: Sortear Amigo
// Objetivo: Seleciona aleatoriamente um amigo da lista e exibe o resultado.
// =========================
function sortearAmigo() {
  // Validação: Verificar se há amigos na lista
  if (amigos.length === 0) {
    alert("Por favor, adicione um amigo antes de sortear"); // Alerta caso a lista esteja vazia
    return; // Encerra a execução da função
  }

  // Sorteio: Gera um índice aleatório com base no tamanho da lista
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio]; // Obtém o amigo correspondente ao índice sorteado

  // Exibe o resultado do sorteio
  document.getElementById("resultado").innerHTML =
    "Amigo sorteado: " + amigoSorteado;

  // Reseta a lista e atualiza a interface
  amigos = []; // Limpa a lista de amigos
  document.getElementById("listaAmigos").innerHTML = ""; // Limpa a exibição da lista
  limparEntrada(); // Reseta o campo de entrada
}
