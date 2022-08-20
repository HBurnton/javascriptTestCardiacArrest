leaderBoard = document.querySelector('ul');
var userScores = [];
var storedUsers = JSON.parse(localStorage.getItem("userScores"))
    if (storedUsers !== null) {
        userScores = storedUsers;
}
for(let i=0; i < userScores.length; i++){
    var userScore = document.createElement('li');
    userScore.innerHTML = userScores[i].name + "<span> SCORE: "+userScores[i].score+"</span>";
    leaderBoard.appendChild(userScore);
    window.href 
}