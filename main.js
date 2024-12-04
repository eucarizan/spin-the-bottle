function getRandomInt() {
  return Math.floor(Math.random() * (6 - 1)) + 1;
}

function spin() {
  let status = document.getElementById('status');
  status.textContent = "Spinning..."
  setTimeout(() => {
    status.textContent = "Selected player: Player " + getRandomInt();
  }, 2000);
}

document.getElementById('spin').addEventListener('click', spin);
