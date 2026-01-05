let dicas = [];
let alertas = [];

const mensagem = document.getElementById("mensagem");

// dicas
fetch("dicas.json")
  .then(res => res.json())
  .then(data => {
    dicas = data.dicas;
  })
  .catch(() => {
    mensagem.textContent = "Erro ao carregar dicas.";
  });

// alertas
fetch("alertas.json")
  .then(res => res.json())
  .then(data => {
    alertas = data.alertas;
  })
  .catch(() => {
    mensagem.textContent = "Erro ao carregar alertas.";
  });

document.getElementById("dicasBtn").addEventListener("click", () => {
  if (dicas.length === 0) {
    mensagem.textContent = "As dicas ainda estão carregando...";
    return;
  }

  const dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];
  mensagem.textContent = "💡 Dica: " + dicaAleatoria;
});

document.getElementById("alertasBtn").addEventListener("click", () => {
  if (alertas.length === 0) {
    mensagem.textContent = "Os alertas ainda estão carregando...";
    return;
  }

  const alertaAleatorio = alertas[Math.floor(Math.random() * alertas.length)];
  mensagem.textContent = "⚠️ Alerta: " + alertaAleatorio;
});
