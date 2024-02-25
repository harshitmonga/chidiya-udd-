let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1;
let timer;

const player1Name = prompt("Enter Player 1 Name:");
const player2Name = prompt("Enter Player 2 Name:");
document.getElementById('player1-name').textContent = `${player1Name}'s Circle`;
document.getElementById('player2-name').textContent = `${player2Name}'s Circle`;

const player1Circle = document.getElementById('player1-circle');
const player2Circle = document.getElementById('player2-circle');
const animal = document.getElementById('animal');
const timerDisplay = document.getElementById('timer');
const player1ScoreDisplay = document.getElementById('player1-score');
const player2ScoreDisplay = document.getElementById('player2-score');

player1Circle.addEventListener('mousedown', () => startGame(1));
player1Circle.addEventListener('touchstart', () => startGame(1));
player2Circle.addEventListener('mousedown', () => startGame(2));
player2Circle.addEventListener('touchstart', () => startGame(2));

function startGame(player) {
  currentPlayer = player;
  if (player === 1) {
    player1Circle.style.backgroundColor = 'green';
  } else {
    player2Circle.style.backgroundColor = 'green';
  }
  generateRandomAnimal();
  let timeLeft = 3;
  timerDisplay.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      endGame();
    } else {
      timerDisplay.textContent = timeLeft;
    }
  }, 1000);
}

function endGame() {
  clearInterval(timer);
  if (currentPlayer === 1) {
    player1Circle.style.backgroundColor = 'blue';
  } else {
    player2Circle.style.backgroundColor = 'blue';
  }
}

function generateRandomAnimal() {
  const animals = [
    { name: 'Dog', canFly: false },
    { name: 'Cat', canFly: false },
    { name: 'Bird', canFly: true },
    { name: 'Elephant', canFly: false },
    { name: 'Fish', canFly: false },
    { name: 'Butterfly', canFly: true },
    { name: 'Snake', canFly: false },
    { name: 'Horse', canFly: false },
    { name: 'Lion', canFly: false },
    { name: 'Monkey', canFly: false }
  ];

  const randomIndex = Math.floor(Math.random() * animals.length);
  const randomAnimal = animals[randomIndex];

  animal.textContent = randomAnimal.name;

  if ((currentPlayer === 1 && player1Circle.style.backgroundColor === 'green') ||
    (currentPlayer === 2 && player2Circle.style.backgroundColor === 'green')) {
    if (randomAnimal.canFly) {
      if (currentPlayer === 1) {
        player1Score++;
        player1ScoreDisplay.textContent = `Score: ${player1Score}`;
      } else {
        player2Score++;
        player2ScoreDisplay.textContent = `Score: ${player2Score}`;
      }
    }
  }

  if (player1Score === 10 || player2Score === 10) {
    const winner = player1Score === 10 ? `${player1Name} wins!` : `${player2Name} wins!`;
    alert(winner);
  }
}
