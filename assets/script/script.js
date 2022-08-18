/*pseudocode city*/

var body = document.body;
var header = document.createElement('header');
var viewHighScore = document.createElement('a');
var timer = document.createElement('p');
var main = document.createElement('main');
var question = document.createElement('h1');
var answerList = document.createElement('ol');
var startButton = document.createElement('button');
var answer = [];
var timeLeft = 0;

/*Considering structure for questions*/
/*Questions are sourced from Unit 03: JavaScript Technical Interview Questions*/
var questionList = [
    {question: "Inside the HTML document, where do you place your JavaScript code?",
     choices: ["Inside the <link> element", 
               "Inside the <head> element",
               "Inside the <script> element",
               "In the <footer> element"],
     answer: "Inside the <script> element"},
     
     {question: "What operator is used to assign a value to a declared variable?",
      choices: ["Double-equal (==)", 
               "Colon (:)",
               "Equal sign (=)",
               "Question mark (?)"],
      answer: "Equal sign (=)"},

     {question: "What are the six primitive data types in JavaScript?",
      choices: ["sentence, int, truthy, bigInt, symbol, undefined", 
               "string, number, boolean, bigInt, symbol, undefined",
               "sentence, float, data, bigInt, symbol, undefined",
               "string, num, falsy, bigInt, symbol, undefined"],
     answer: "string, number, boolean, bigInt, symbol, undefined"},

     {question: "How do we declare a conditional statement in JavaScript?",
     choices: ["if...else", 
               "for loop",
               "difference...between",
               "while loop"],
     answer: "if...else"},

     {question: "From the given array which index is the letter 'b' on? ['a', 'b', 'c', 'd']",
     choices: ["1", 
               "2",
               "3",
               "0"],
     answer: "1"},

     {question: "How do we stop a loop from from repeating indefinitely?",
     choices: ["A loop will stop executing when the condition is true.", 
               "A loop will stop executing when the condition is false.",
               "We have to explicitly end the loop with the break keyword.",
               "When we have iterated through half of the condition."],
     answer: "A loop will stop executing when the condition is false."},

     {question: "How do we access a value stored in an object?",
     choices: ["Dot notation, Bracket notation", 
               "Dot notation, Curl bracket notation",
               "Period notation, Square bracket notation",
               "Equal notation, Abstract notation"],
     answer: "Dot notation, Bracket notation"},
]

/*
The below shuffle function is taken from this
https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array\
}*/

function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

/*shuffle array*/
questionList = shuffle(questionList);

viewHighScore.textContent="Click to View High Scores";
timer.textContent="Time Remaining: " + timeLeft;
question.textContent = "Welcome to Javascript Quiz! Please click Start Now! to get going. You have 30 seconds once the timer starts.";
viewHighScore.setAttribute("href", "#");
startButton.textContent = "Start Now!"

body.appendChild(header);
header.appendChild(viewHighScore);
header.appendChild(timer);
body.appendChild(main);
main.appendChild(question);
main.appendChild(startButton);
main.appendChild(answerList);


function printQuestion(){
    if (questionList.length == 0){
        console.log('hi');
    }else{
        while(answerList.hasChildNodes()) {
            answerList.removeChild(answerList.firstChild);
        }
        var oneQuestion = questionList.pop();
        question.textContent = oneQuestion.question;
        oneQuestion.choices = shuffle(oneQuestion.choices)
        for(let i=0; i < oneQuestion.choices.length; i++){
            answer[i] = document.createElement('li');
            answer[i].textContent = oneQuestion.choices[i];
            answerList.appendChild(answer[i]);
        }
    } 
}


startButton.addEventListener("click", printQuestion);
startButton.addEventListener("click", startButton.remove);