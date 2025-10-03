const gameArea = document.getElementById("game-area");
const scoreDisplay = document.getElementById("score");
let score = 0;

function createTarget() {
  const target = document.createElement("div");
  target.classList.add("target");

  const x = Math.random() * (gameArea.clientWidth - 50);
  const y = Math.random() * (gameArea.clientHeight - 50);

  target.style.left = `${x}px`;
  target.style.top = `${y}px`;

  target.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    gameArea.removeChild(target);
  });

  gameArea.appendChild(target);

  setTimeout(() => {
    if (gameArea.contains(target)) {
      gameArea.removeChild(target);
    }
  }, 1000);
}

setInterval(createTarget, 1500);
