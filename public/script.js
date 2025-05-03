function addMessage(sender, text) {
  const chat = document.getElementById("chat");
  const message = document.createElement("div");
  message.textContent = `${sender}: ${text}`;
  chat.appendChild(message);
  chat.scrollTop = chat.scrollHeight;
}

function handleUserInput() {
  const input = document.getElementById("userInput");
  const value = input.value.trim();
  if (!value) return;
  addMessage("Você", value);
  handleOption(parseInt(value));
  input.value = "";
}

function handleOption(option) {
  switch (option) {
    case 1:
      addMessage("FURIA Bot", "🏁 Últimos resultados: 09/04 FURIA 0 x 2 The Mongolz -- 08/04 FURIA 0 x 2 Vurtus.pro...");
      break;

    case 2:
      fetch('/jogos-furia')
        .then(res => res.json())
        .then(data => {
          if (data.length === 0) {
            addMessage("FURIA Bot", "⚠️ Nenhum jogo futuro encontrado.");
          } else {
            data.slice(0, 3).forEach(game => {
              const msg = `🏆 ${game.event.name}\n🆚 ${game.team1.name} vs ${game.team2.name}\n📅 ${new Date(game.date).toLocaleString()}`;
              addMessage("FURIA Bot", msg);
            });
          }
        })
        .catch(() => {
          addMessage("FURIA Bot", "❌ Erro ao buscar os jogos.");
        });
      break;

    case 3:
      addMessage("FURIA Bot", "👥 Jogadores: FalleN, KSCERATO, yuurih, YEKINDAR, molodoy");
      break;

    case 4:
      addMessage("FURIA Bot", "📌 Curiosidade: A FURIA foi fundada em 2017 e já chegou ao TOP 3 mundial no ranking da HLTV.");
      break;

    case 5:
      addMessage("FURIA Bot", "❓ Quiz: Quem é o atual capitão da FURIA?");
      break;

    case 6:
      addMessage("FURIA Bot", "🏆 Conquistas: ESL Pro League, DreamHack Masters, CBCS Elite League...");
      break;

    case 7:
      window.open("https://x.com/FURIA", "_blank");
      break;

    case 8:
      addMessage("FURIA Bot", "🔥 A FURIA é uma das principais organizações de e-sports do Brasil, com foco em CS:GO.");
      break;

    default:
      addMessage("FURIA Bot", "Digite um número de 1 a 8 ou clique em uma das opções.");
  }
}