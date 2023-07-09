
// Button By ID
const buttonA = document.getElementById('buttonA');
const buttonB = document.getElementById('buttonB');
const buttonC = document.getElementById('buttonC');
const buttonD = document.getElementById('buttonD');
const startButton = document.getElementById('startButton');

// Display Output
const questionText = document.getElementById('questionText');
const timeDisplay = document.getElementById('timeDisplay');
const scoreDisplay = document.getElementById('scoreDisplay');
const choicesDisplay = document.getElementById('answerDiv');

// Timer
let time = 60;
var timer;

// Score Board
let score = 0
scoreDisplay.textContent = score;

// Array Variables
let currentQuestion = 0;

// Quiz Start
startButton.addEventListener('click', function () {
    startButton.style.display = 'none';
    questionCycle();
    startTimer();
});

// Start Timer
function startTimer() {
    if (timer === undefined) {
        timer = setInterval(function () {
            timeDisplay.textContent = time;
            time--;
            if (time <= 0) {
                clearInterval(timer);
            }
        }, 1000);
    }
}

// Question Cycle
function questionCycle() {
    questionText.textContent = quizArray[currentQuestion].question;

    choicesDisplay.innerHTML = "";
    quizArray[currentQuestion].choices.forEach(function (choice) {
        const btn = document.createElement("button");
        btn.classList.add("button");
        btn.textContent = choice;
        btn.onclick = checkChoice;
        choicesDisplay.appendChild(btn)
    })
};

// Ans Eval
function checkChoice(event) {

    let userChoice = event.target.textContent;
    console.log(userChoice)
    if (userChoice === quizArray[currentQuestion].correctAns ) {
        // Increase Score
        score++;
        scoreDisplay.textContent = score;
    } else {
        // Deduct time from clock.
        time -= 5;
    }

    currentQuestion++;

    if (currentQuestion === quizArray.length) {
        questionText.textContent = 'Gamer Over';
        choicesDisplay.innerHTML = '';
        clearInterval(timer);

        const resetButton = document.createElement('button');
        resetButton.classList.add('button');
        resetButton.textContent = 'Play Again';
        resetButton.onclick = reset;
        choicesDisplay.appendChild(resetButton);
    } else {
        questionCycle();
    }
}

function reset () {
    currentQuestion = 0;
    score = 0;
    scoreDisplay.textContent = score;
    time = 60;
    timer = undefined;
    questionCycle();
    startTimer();
}

