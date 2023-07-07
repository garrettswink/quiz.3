// Universal Button Class
// I need to ask about the universal button. Never cooperates.
// const buttons = document.getElementsByClassName('button');

// Button By ID
const buttonA = document.getElementById('buttonA');
const buttonB = document.getElementById('buttonB');
const buttonC = document.getElementById('buttonC');
const buttonD = document.getElementById('buttonD');
const startButton = document.getElementById('startButton');


// Display Output
const questionDisplay = document.querySelector('.questionDisplay');
const welcomeText = document.getElementById('welcomeText'); 
const questionText = document.getElementById('questionText');
const display = document.querySelector(".display");
const timeDisplay = document.getElementById('timeDisplay');
const testOutput = document.getElementById('testOutput');
const scoreDisplay = document.getElementById('scoreDisplay');


// Timer
time = 60;
timeDisplay.textContent = time;
var timer;

// Score Board
score = 0
scoreDisplay.textContent = score;

// Array Variables
let currentQuestion = 0;

// Q&A Array
const quizArray = [
    {
        id: "0",
        question: "What does HTML stand for?",
        answer: [
            {
                text: "Hyper Text Markup Language",
                correct: true
            },
            {
                text: "Historic Task Meneuvering Lexicon",
                correct: false
            },
            {
                text: "Hard Terminal Management Layer",
                correct: false
            },
            {
                text: "It doesn't stand for anything...like KFC.",
                correct: false
            },
        ],
    },
    {
        id: "1",
        question: "What does CSS stand for?",
        answer: [
            {
             text: "Cat Supervision Strategies",
             correct: false
            },
            {
            text: "Cascading Style Sheets",
            correct: true
            },
            {
            text: "Crystal Solvent Solution",
            correct: false
            },
            {
            text: "Clairvoyant Search Selectors",
            correct: false
            }
        ],
    },
    {
        id: "2",
        question: "Which language adds interactivity to a website?",
        answer: [
            {
            text: "HTML",
            correct: false
            },
            {
            text: "CSS",
            correct: false
            },
            {
            text: "French",
            correct: false
            },
            {
            text: "JavaScript",
            correct: true
            },
        ],
    },
    {
        id: "3",
        question: "Which of the following is truthy",
        answer: [
            {
            text: "If X than Y",
            correct: false
            },
            {
            text: "0",
            correct: true,
            },
            {
            text: "False",
            correct: false
            },
            {
            text: "Mac is better than PC",
            correct: false
            },
        ],
    },
    {
        id: "4",
        question: "A JavaScript variable is _____",
        answer: [
            {
            text: "The mysterious force that animates cat gifs",
            correct: false
            },
            {
            text: "JavaScript doesn't use variables",
            correct: false
            },
            {
            text: "A container that holds a value",
            correct: true
            },
            {
            text: "The part of the code that does the thing",
            correct: false
            },
        ],
    },
];

// Question Cycle
function questionCycle() {

    if(currentQuestion >= 0 && currentQuestion < quizArray.length) {
        questionText.textContent = quizArray[currentQuestion].question;
        buttonA.textContent = quizArray[currentQuestion].answer[0].text;
        buttonB.textContent = quizArray[currentQuestion].answer[1].text;
        buttonC.textContent = quizArray[currentQuestion].answer[2].text;
        buttonD.textContent = quizArray[currentQuestion].answer[3].text;
    
        
    } else {
        // Display a message when the quiz is over
        questionText.textContent = "You have completed the quiz!";
        buttonA.textContent = "🔥🔥🔥🔥";
        buttonB.textContent = "🔥🔥🔥🔥";
        buttonC.textContent = "🔥🔥🔥🔥";
        buttonD.textContent = "🔥🔥🔥🔥";
    }
    let answerValue = quizArray[currentQuestion].answer[0].correct;
    buttonA.addEventListener("click", function() {
        if (answerValue) {
            score++;
            scoreDisplay.textContent = score;
        } else {
            // Deduct time from clock.
        }
    }); 
    currentQuestion++;

}
 
// Quiz Start
startButton.addEventListener('click', function() {
    startButton.style.display = 'none';
    questionCycle();
    startTimer();
});

// Start Timer
function startTimer () {
    if (timer === undefined) {
    timer = setInterval (function () {
        timeDisplay.innerHTML = '00:' + (time < 10 ? '0' + time : time);
        time --;
        if (time < 0) {
            clearInterval (timer);
            timer = undefined;
        }
    }, 1000);
    }
}

// Button Event Listener
buttonA.addEventListener('click', questionCycle);
buttonB.addEventListener('click', questionCycle);
buttonC.addEventListener('click', questionCycle);
buttonD.addEventListener('click', questionCycle);

