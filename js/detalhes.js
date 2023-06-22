window.onload = function() {
    var playerDetails = document.getElementById('player-details');

    var jogador = JSON.parse(localStorage.getItem('selectedPlayer'));

    playerDetails.innerHTML = `
        <div id="player-image-name-position">
            <img src="${jogador.imagem}" alt="${jogador.nome}">
            <h1>${jogador.nome}</h1>
            <h3>${jogador.posicao}</h3>
        </div>
        <div id="player-info">
            <p>${jogador.descricao}</p>
            <h4 class="info-black">${jogador.nome_completo}</h4> <!-- Adiciona a classe info-black -->
            <h4 class="info-black">${jogador.nascimento}</h4> <!-- Adiciona a classe info-black -->
            <h4 class="info-black">${jogador.altura}</h4> <!-- Adiciona a classe info-black -->
            <a id="back-button" href="index.html">Voltar</a>
        </div>
    `;
}