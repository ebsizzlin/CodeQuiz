var playAgain = document.querySelector("#againBtn");
var clearBtn = document.querySelector("#clearBtn");

//json.parse = string. doesn't have local storage, have to turn into actual []

// function displayHighscore() {
//   var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

//   var appearList = document.getElementById("highscores");
  
//   highscores.forEach(function (scoreNew) {
//     //putting the scores in a list
//     var scoreList = document.createElement("li");
//     scoreList.textContent = scoreNew.initials + " - " + scoreNew.score;

//     appearList.appendChild(scoreList);
//   });

// }

var highscore = localStorage.getItem('highscore');
highscore = JSON.parse(highscore);

if (highscore !== null) {
  for (var i = 0; i < highscore.length; i++)  {
    var scoreList = document.createElement('li');
    scoreList.textContent = highscore[i].initials + " " + highscore[i].score;
    // highscore.appendChild(scoreList); // why is this not an acceptable function ?
  }
}



function clear()  {
  console.log('clearing highscores');
  window.localStorage.removeItem('highscore');
}

// window.localStorage.getItem("highscores", "{}"); //'{}' stringifying an object (how it was made on script.js)

// submitBtn.addEventListener("click", saveHighscore);
playAgain.addEventListener("click", function () {
  document.location.href = "index.html";
});
clearBtn.addEventListener("click", clear);
// displayHighscore();
