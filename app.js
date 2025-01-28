//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Lista para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  const amigoInput = document.getElementById("amigo").value.trim(); // Obtém o nome digitado e remove espaços extras

  // Verifica se o campo está vazio
  if (amigoInput === "") {
    alert("Por favor, insira um nome");
    return; // Interrompe a função se o campo estiver vazio
  }

  // Verifica se o nome já está na lista
  if (amigos.includes(amigoInput)) {
    alert("Este amigo já foi adicionado!");
    return; // Interrompe a função se o nome já existir na lista
  }

  // Adiciona o amigo à lista e atualiza a interface
  amigos.push(amigoInput);
  limparEntrada(); // Limpa o campo de entrada
  mostrarAmigos(); // Atualiza a exibição da lista
}

// Função para limpar o campo de entrada
function limparEntrada() {
  document.getElementById("amigo").value = ""; // Reseta o campo de texto
}

// Função para exibir a lista de amigos na interface
function mostrarAmigos() {
  const listaAmigos = document.getElementById("listaAmigos"); // Seleciona o elemento onde a lista será exibida
  listaAmigos.innerHTML = ""; // Limpa a lista para evitar duplicações

  // Adiciona cada amigo como um item da lista
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li"); // Cria um elemento de lista (<li>)
    li.textContent = amigos[i]; // Define o texto como o nome do amigo
    listaAmigos.appendChild(li); // Insere o item na lista visível
  }
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
  // Verifica se a lista de amigos está vazia
  if (amigos.length === 0) {
    alert("Por favor, adicione um amigo antes de sortear");
    return; // Interrompe a função se não houver amigos
  }

  // Sorteia um índice aleatório da lista
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio]; // Obtém o nome correspondente ao índice sorteado

  // Exibe o amigo sorteado na interface
  document.getElementById("resultado").innerHTML =
  "Amigo sorteado: " + amigoSorteado;

  // Reinicia a lista e limpa a interface
  amigos = []; // Reseta a lista de amigos
  document.getElementById("listaAmigos").innerHTML = ""; // Limpa a exibição da lista
  limparEntrada(); // Limpa o campo de entrada
}
