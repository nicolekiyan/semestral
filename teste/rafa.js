$(document).ready(function() {
  // Adiciona um evento de clique ao botão com a classe "openbtn"
  $(".openbtn").click(function() {
    // Alterna a classe "active" no botão
    $(this).toggleClass('active');
  });
});

// Seleciona os elementos
const toggleButton = document.getElementById("toggleButton");
const content = document.getElementById("content");

// Adiciona um evento de clique ao botão
toggleButton.addEventListener("click", function () {
  // Verifica se o conteúdo está visível
  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    content.classList.add("visible");
  } else {
    content.classList.remove("visible");
    content.classList.add("hidden");
  }
});

toggleButton.addEventListener("click", function () {
  // Alterna o menu
  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    content.classList.add("visible");
    overlay.classList.remove("hidden");
    overlay.classList.add("visible");
  } else {
    content.classList.remove("visible");
    content.classList.add("hidden");
    overlay.classList.remove("visible");
    overlay.classList.add("hidden");
  }
});


const overlay = document.getElementById("overlay");
const body = document.querySelector("body"); // Ou outro contêiner principal, como o <body>

// Adiciona evento ao botão
toggleButton.addEventListener("click", function () {
  if (content.classList.contains("hidden")) {
    // Mostra o menu
    content.classList.remove("hidden");
    content.classList.add("visible");
    overlay.classList.remove("hidden");
    overlay.classList.add("visible");
    
    // Aplica blur no fundo da página (não no menu)
    tudo.classList.add("blurred");
  } else {
    // Esconde o menu
    content.classList.remove("visible");
    content.classList.add("hidden");
    overlay.classList.remove("visible");
    overlay.classList.add("hidden");
    
    // Remove o blur do fundo da página
    tudo.classList.remove("blurred");
  }
});

// Adiciona evento para remover o menu e o blur ao clicar no overlay
overlay.addEventListener("click", function () {
  content.classList.remove("visible");
  content.classList.add("hidden");
  overlay.classList.remove("visible");
  overlay.classList.add("hidden");
  body.classList.remove("blurred");
});
