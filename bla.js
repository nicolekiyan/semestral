// Seleciona os elementos
const toggleButton = document.getElementById("toggleButton");
const content = document.getElementById("content");

// Adiciona um evento de clique ao botão
toggleButton.addEventListener("click", function() {
    // Alterna a classe "hidden" no elemento "content"
    content.classList.toggle("hidden");
});
