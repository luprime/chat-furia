const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/jogos-furia', async (req, res) => {
  try {
    const response = await fetch('https://pt.betsapi.com/t/251055/FURIA');
    const data = await response.json();
    const now = Date.now();

    const furiaGames = data.filter(
      game =>
        (game.team1.name.toLowerCase().includes('furia') ||
         game.team2.name.toLowerCase().includes('furia')) &&
        game.date > now
    );

    res.json(furiaGames);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar dados da HLTV' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});