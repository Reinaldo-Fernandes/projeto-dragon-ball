/* 
  O que precisamos fazer? - quando clicar no botão do personagem na lista temos que marcar o botão como selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele 

	OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
        passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele 
*/

const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");
const nomePersonagem = document.querySelector(".nome-personagem");
const descricaoPersonagem = document.querySelector(".descricao");

const nomes = [
  "Cyberstorm",
  "Codepixie",
  "Hexblade",
  "Neonpulse",
  "Codebreaker"
];

const descricoes = [
  "Um guerreiro cibernético do futuro que protege os dados da humanidade com habilidades de hack e força sobre-humana.",
  "Uma maga digital que conjura códigos mágicos para derrotar bugs e travamentos no mundo virtual.",
  "Um espadachim sombrio que invade sistemas como se fossem masmorras, com ataques críticos de lógica pura.",
  "Especialista em velocidade e redes, sua mente pulsa com neon e pacotes de dados em altíssima frequência.",
  "Um gênio rebelde da programação que quebra as regras para proteger os inocentes do caos digital."
];

let indiceAtual = 0;

// Atualiza o personagem na tela
function atualizarPersonagem(indice) {
  removerSelecionado();

  botoes[indice].classList.add("selecionado");
  personagens[indice].classList.add("selecionado");
  nomePersonagem.textContent = nomes[indice];
  descricaoPersonagem.textContent = descricoes[indice];

  adicionarAnimacao(personagens[indice]);

  indiceAtual = indice;
}

// Remove classe selecionado dos elementos ativos
function removerSelecionado() {
  document.querySelector(".botao.selecionado")?.classList.remove("selecionado");
  document.querySelector(".personagem.selecionado")?.classList.remove("selecionado");
}

// Animação de fade (suave)
function adicionarAnimacao(elemento) {
  elemento.classList.add("fade");
  setTimeout(() => elemento.classList.remove("fade"), 300);
}

// Clique nos botões
botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => atualizarPersonagem(indice));
});

// Navegação com teclado (setas esquerda e direita)
document.addEventListener("keydown", (evento) => {
  if (evento.key === "ArrowRight") {
    const proximo = (indiceAtual + 1) % personagens.length;
    atualizarPersonagem(proximo);
  } else if (evento.key === "ArrowLeft") {
    const anterior = (indiceAtual - 1 + personagens.length) % personagens.length;
    atualizarPersonagem(anterior);
  }
});
