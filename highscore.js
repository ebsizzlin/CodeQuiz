function printHighscores() {
  //store in local storage //array added later
  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  //ordered # list //help from tutor
  highscores.sort(function (a, b) {
    return b.score - a.score;
  });

  highscores.forEach(function (score) {
    //create a list using each score
    var liList = document.createElement("li");
    liList.textContent = score.initials + " - " + score.score;

    //actually put the list on the page
    var olEl = document.getElementById("highscores");
    olEl.appendChild(liTag);
  });
}

//invoke when highscore button is pushed
printHighscores();
