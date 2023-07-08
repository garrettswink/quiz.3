
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

    choicesDisplay.innerHTML = ""
    quizArray[currentQuestion].choices.forEach(function (choice) {
        const btn = document.createElement("button");
        btn.classList.add("button");
        btn.textContent = choice;

        btn.onclick = checkChoice;
        choicesDisplay.appendChild(btn)
    })


    // if(currentQuestion >= 0 && currentQuestion < quizArray.length) {
    //     questionText.textContent = quizArray[currentQuestion].question;
    //     buttonA.textContent = quizArray[currentQuestion].answer[0].text;
    //     buttonB.textContent = quizArray[currentQuestion].answer[1].text;
    //     buttonC.textContent = quizArray[currentQuestion].answer[2].text;
    //     buttonD.textContent = quizArray[currentQuestion].answer[3].text;


    // } else {
    //     // Display a message when the quiz is over
    //     questionText.textContent = "You have completed the quiz!";
    //     buttonA.textContent = "🔥🔥🔥🔥";
    //     buttonB.textContent = "🔥🔥🔥🔥";
    //     buttonC.textContent = "🔥🔥🔥🔥";
    //     buttonD.textContent = "🔥🔥🔥🔥";
    // }
    // let answerValue = quizArray[currentQuestion].answer[0].correct;
    // buttonA.addEventListener("click", function() {

    // }); 
    

}

function checkChoice(event) {

    let userChoice = event.target.textContent;
    console.log(userChoice)
    if (userChoice === quizArray[currentQuestion].correctAns ) {
        score++;
        scoreDisplay.textContent = score;
    } else {
        // Deduct time from clock.
        time -= 5;
    }
    
    currentQuestion++;

    // if last Q then rendeer finsih game
}

// Button Event Listener
buttonA.addEventListener('click', questionCycle);
buttonB.addEventListener('click', questionCycle);
buttonC.addEventListener('click', questionCycle);
buttonD.addEventListener('click', questionCycle);

