var playAgain = document.querySelector("#againBtn");
var clearBtn = document.querySelector("#clearBtn");

//how to display score/initials once it comes w the submitBtn from script.js
function saveHighscore() {
  var highscores = JSON.parse(window.localStorage.getItem("highscores"));

  highscores.forEach(function (scoreNew) {
    //putting the scores in a list
    var scoreList = document.createElement("li");
    scoreList.textContent = scoreNew.initials + " - " + scoreNew.score;

    var appearList = document.getElementById("highscores");
    appearList.appendChild(li);
  });

  var scoreNew = {
    score: "#finalScore",
    initials: initials.value.trim(),
  };
  console.log("scoreNew:", scoreNew);
}

// window.localStorage.getItem("highscores", "{}"); //'{}' stringifying an object (how it was made on script.js)

// submitBtn.addEventListener("click", saveHighscore);
playAgain.addEventListener("click", function () {
  document.location.href = "index.html";
});
clearBtn.addEventListener("click", clear);
