let score = 0;
let timer;

const circle = document.getElementById('circle');
const animal = document.getElementById('animal');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');

circle.addEventListener('mousedown', startGame);
circle.addEventListener('touchstart', startGame);

function startGame() {
  circle.style.backgroundColor = 'green';
  generateRandomAnimal();
  let timeLeft = 3;
  updateTimer(timeLeft);
}

function updateTimer(timeLeft) {
  timerDisplay.textContent = `Time Left: ${timeLeft}`;
  if (timeLeft === 0) {
    endGame();
  } else {
    timer = setTimeout(() => {
      updateTimer(timeLeft - 1);
    }, 1000);
  }
}

circle.addEventListener('mouseup', checkScore);
circle.addEventListener('touchend', checkScore);

function checkScore() {
  clearTimeout(timer);
  const isFlying = animal.dataset.canFly === 'true';
  if ((circle.style.backgroundColor === 'green' && isFlying) || (circle.style.backgroundColor === 'blue' && !isFlying)) {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
  }
  circle.style.backgroundColor = 'blue';
}

function endGame() {
  clearTimeout(timer);
  circle.style.backgroundColor = 'blue';
  animal.textContent = '';
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
  animal.dataset.canFly = randomAnimal.canFly;
}
