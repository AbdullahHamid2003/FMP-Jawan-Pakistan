// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase, ref, onChildAdded } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAu-ZEWVL6JZUurmf94T6xFJJk5B2kTzk4",
    authDomain: "abdullah-practice-quiz-app.firebaseapp.com",
    projectId: "abdullah-practice-quiz-app",
    storageBucket: "abdullah-practice-quiz-app.appspot.com",
    messagingSenderId: "304356725751",
    appId: "1:304356725751:web:cfdfc8dc7986c25a7094f2",
    measurementId: "G-M2TH2N5NXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

var loader = document.getElementById("loader");
var showQuestion = document.getElementById("showQuestion")

function getDataFromDatabase() {
    loader.style.display = 'block';
    showQuestion.style.display = 'none';

    var reference = ref(db, `questions/`)
    onChildAdded(reference, function (data) {
        console.log(data.val())
        questions.push(data.val())
        loader.style.display = 'none';
        showQuestion.style.display = 'block';
        renderQuestion()
    })
}
getDataFromDatabase();


var questions = [
    // {
    //     question: 'Which of the following methods is used to add elements to the end of an array in JavaScript?',
    //     options: [ 'push()', 'pop()', 'Shift()', 'unshift()' ],
    //     correctAns: 'push()',       
    // },
    // {
    //     question: 'What is the output of the following code "console.log(2 + "2");"? ',
    //     options: [ '4', '"22"', 'NaN', '"2+2"' ],
    //     correctAns: '"22"',       
    // },
    // {
    //     question: 'Which keyword is used to declare variables in JavaScript?',
    //     options: [ 'let', 'var', 'const', 'All of the above' ],
    //     correctAns: ' All of the above',       
    // },
    // {
    //     question: 'What is the result of the following expression? 5 == "5"',
    //     options: [ 'true', 'false', 'undefined', 'NaN' ],
    //     correctAns: 'true',       
    // },
    // {
    //     question: 'Which of the following is not a valid JavaScript data type?',
    //     options: [ 'string', 'boolean', 'number', 'character' ],
    //     correctAns: 'character',       
    // },
    // {
    //     question: 'How do you write a single-line comment in JavaScript?',
    //     options: [ ' // This is a comment', ' <!-- This is a comment -->', ' /* This is a comment */', 'This is a comment' ],
    //     correctAns: '// This is a comment',       
    // },
    // {
    //     question: 'What is the scope of a variable declared with the let keyword?',
    //     options: [ 'Block scope', 'Function scope', 'Global scope', 'Local scope' ],
    //     correctAns: 'Block scope',       
    // },
    // {
    //     question: 'Which array method is used to join all elements of an array into a string?',
    //     options: [ 'concat()', 'join()', 'slice()', 'toString()' ],
    //     correctAns: 'join()',       
    // },
    // {
    //     question: 'Which of the following is not a valid JavaScript data type?',
    //     options: [ 'Executes a function immediately', 'Pauses the execution of a function for a specified time', 'Repeats the execution of a function at regular intervals', 'None of the above' ],
    //     correctAns: 'Pauses the execution of a function for a specified time',       
    // },
    // {
    //     question: 'What does the === operator in JavaScript check for?',
    //     options: [ 'Equality of value', 'Equality of value and type', 'nequality of value', 'Assignment of a value' ],
    //     correctAns: 'Equality of value and type',       
    // },
]

var currentQuestion = document.getElementById("currentQuestion")
var totalQuestion = document.getElementById("totalQuestion")
var question = document.getElementById("question")
var answerParent = document.getElementById("answerParent")

var indexNum = 0;
var score = 0;

window.checkQuestion = function (a, b) {
    if (a == b) {
        score++;
        console.log(score);
    }
    else if(a != b){
        score--;
    }

    nextQuestion();
}

window.nextQuestion = function () {
    if(indexNum + 1 == questions.length){
        alert("Your Score is " + score)
    }
    else{
    indexNum++;
    renderQuestion();
    }
}

function renderQuestion() {
    currentQuestion.innerHTML = indexNum + 1;
    totalQuestion.innerHTML = questions.length;

    var obj = questions[indexNum];

    question.innerHTML = obj.question;

    answerParent.innerHTML = '';
    for (var i = 0; i < obj.options.length; i++) {
        answerParent.innerHTML += `<div class="col-md-3">
        <div class="py-2">
            <button onclick="checkQuestion('${obj.options[i]}','${obj.correctAnswer}')" class="btn btn-dark fs-4 rounded-pill w-100 ">
                ${obj.options[i]}
            </button>
        </div>
    </div>`
    }
}
renderQuestion();
