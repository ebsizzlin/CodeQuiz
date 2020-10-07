var initialsEl = document.querySelector("#initials"); //entering initials
var submitBtn = document.querySelector("#submitBtn"); //button
var hideHighScore = document.querySelector("#hidehighscore"); //hs hide button
var showHighScore = document.querySelector("#showhighscore"); //hs show button
var highScoreList = document.querySelector("#highscoreList"); //list of hs + again / clear buttons

function saveHighscore() {
  var highscores = document.getElementById("highscores");
  localStorage.setItem("highscores", JSON.stringify(highscores));

  highscores.textContent = [];

  var scoreNew = {
    score: "#finalScore",
    initials: "#initials", // trim ?
  };
  console.log("scoreNew:", scoreNew);

  // highscores.push(scoreNew);
}

//   window.localStorage.setItem("highscores", "{}"); //'{}' stringifying an object (how it was made on script.js)
//   // window.localStorage.setItem("highscores", JSON.stringify(highscores)); //added JSON and stringify after consulting w classmates, not quite sure what it means yet

function showHigh() {
  showHighScore.setAttribute("class", "hide");
  highHighScore.setAttribute("class", "show");
  highScoreList.setAttribute("class", "show");
}

function hideHigh() {
  hideHighScore.setAttribute("class", "hide");
  showHighScore.setAttribute("class", "show");
  highScoreList.setAttribute("class", "hide");
}

showHighScore.addEventListener("click", showHigh);
hideHighScore.addEventListener("click", hideHigh);

submitBtn.addEventListener("click", saveHighscore);
saveHighscore.textContent = [];
