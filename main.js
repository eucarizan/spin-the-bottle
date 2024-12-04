let players = [];

function addPlayer() {
  let playerName = document.getElementById("player-name").value;
  document.getElementById("player-name").value = "";
  if (players.includes(playerName)) {
    document.getElementById("status").textContent = "Player already exists!";
  } else {
    players.push(playerName);
    updateList(playerName);
    document.getElementById("status").textContent = "Spin the bottle!";
  }
}

function updateList(playerName) {
  let list = document.getElementById("players");
  let newPlayer = document.createElement("li");

  newPlayer.textContent = playerName;
  list.appendChild(newPlayer);
}

function getPlayer() {
  let index = Math.floor(Math.random() * players.length);
  return players[index];
}

function spin() {
  let status = document.getElementById("status");
  status.textContent = "Spinning..."
  setTimeout(() => {
    status.textContent = "Selected player: " + getPlayer();
  }, 2000);
}

document.getElementById("spin").addEventListener("click", spin);
document.getElementById("add-player").addEventListener("click", addPlayer);
