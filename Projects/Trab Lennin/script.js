// Menu Responsivo
document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".list-menu").classList.toggle("show");
});

// Animações de Rolagem Suave
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Verifica se estamos na página inicial
const isIndexPage =
  window.location.pathname.endsWith("index.html") ||
  window.location.pathname === "/";

if (isIndexPage) {
  window.onload = function () {
    // Verifica se a mensagem já foi exibida
    const hasSeenWelcomeMessage = localStorage.getItem("hasSeenWelcomeMessage");

    if (!hasSeenWelcomeMessage) {
      // Mostra a mensagem de boas-vindas
      setTimeout(() => {
        alert("Bem-vindo à Toca Do Sabor!");
        // Marca que a mensagem já foi exibida
        localStorage.setItem("hasSeenWelcomeMessage", "true");
      }, 1000);
    }
  };
}

// Formulário de Avaliação (Simulação)
function validateForm() {
  const name = document.querySelector("#name").value;
  const feedback = document.querySelector("#feedback").value;
  if (name === "" || feedback === "") {
    alert("Por favor, preencha todos os campos.");
    return false;
  }
  alert("Obrigado pelo seu feedback!");
  return true;
}
