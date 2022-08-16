var body = document.body;
var header = document.createElement('header');
var viewHighScore = document.createElement('a');
var timer = document.createElement('p');
var main = document.createElement('main');
var question = document.createElement('h2');
var answerList = document.createElement('ol');
var choice1 = document.createElement('li');
var choice2 = document.createElement('li');
var choice3 = document.createElement('li');
var choice4 = document.createElement('li');

/*Considering structure for questions*/
var questionList = [
    {question: "This is a test question",
    choices: {
        a: "The thing",
        b: "another thing",
        c: "yes things",
        d: "last thing",
    },
    correct_choice: 'C',},
]
    


var timeLeft = 0;

viewHighScore.textContent="Click to View High Scores";
timer.textContent="Time Remaining: " + timeLeft;
question.textContent = "This is your first question";
viewHighScore.setAttribute("href", "#");

choice1.textContent = "I am a test";
choice2.textContent = "I am a test too";
choice3.textContent = "I'm not";
choice4.textContent = "Wait me too!";

body.appendChild(header);
header.appendChild(viewHighScore);
header.appendChild(timer);
body.appendChild(main);
main.appendChild(question);
main.appendChild(answerList);

answerList.appendChild(choice1);
answerList.appendChild(choice2);
answerList.appendChild(choice3);
answerList.appendChild(choice4);

choice1.addEventListener('click', function(){
    question.textContent = Math.floor(Math.random()*101);
})