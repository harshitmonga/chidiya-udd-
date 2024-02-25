let score = 0;
let timer;

const circle = document.getElementById('circle');
const animal = document.getElementById('animal');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');

circle.addEventListener('mousedown', startGame);
circle.addEventListener('touchstart', startGame);
circle.addEventListener('mouseup', endGame);
circle.addEventListener('touchend', endGame);

function startGame() {
    circle.style.backgroundColor = 'green';
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
    circle.style.backgroundColor = 'blue';
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

    if (circle.style.backgroundColor === 'green') {
        if (randomAnimal.canFly) {
            score++;
            updateScore();
        }
    }
}

function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;

    if (score === 10) {
        alert('Congratulations! You won the game!');
    }
}
