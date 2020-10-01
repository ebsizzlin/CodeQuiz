function printHighscores() {
  //store in local storage
  var highscores = JSON.parse(window.localStorage.getItem("highscores"));

  //put the scores in a list
  highscores.forEach(function (score) {
    var listNum = document.createElement("li");
    listNum.textContent = score.initials + " - " + score.score;
  });
}

//invoke when highscores load
printHighscores();
