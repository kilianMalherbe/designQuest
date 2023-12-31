const DisplayData = (players) => {
  players = players.sort((a, b) => (b.score - a.score));
  const PlayerList = document.querySelector('.PlayerList');
  PlayerList.innerHTML = '';
  if (players.length < 1) {
    PlayerList.innerHTML = 'No scores yet registered';
  } else {
    players.forEach((player, i) => {
      const NewPlayer = document.createElement('li');
      NewPlayer.classList.add('SinglePlayer');
      NewPlayer.innerHTML = `<h3>${player.user} <sup>#${i + 1}<sup/></h3>
            <h4>${player.score}</h4>`;
      PlayerList.appendChild(NewPlayer);
    });
  }
};

export default DisplayData;