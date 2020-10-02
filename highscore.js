var highScore = document.querySelector("#highscores");
var clear = document.querySelector("#clearBtn");
var playAgain = document.querySelector("#againBtn");

// Event listener to clear scores
clear.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});
// Retreives local stroage
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
  for (var i = 0; i < allScores.length; i++) {
    var createLi = document.createElement("li");
    createLi.textContent = allScores[i].initials + " " + allScores[i].score;
    highScore.appendChild(createLi);
  }
}
// Event listener to move to index page
playAgain.addEventListener("click", function () {
  window.location.replace("index.html");
});

// //

// var clearBtn = document.querySelector("#clearBtn"); //clear button

// function printHighscores() {
//   //store in local storage //array added later
//   var highscores = JSON.parse(window.localStorage.getItem("highscores")) || []; //array added later
//   console.log("highscores:", highscores);
//   if (typeof highscores === object) {
//     //only will 'sort' if there's something there

//     //ordered # list //i was lost and googled around to find this little part but it think it's broken it
//     // highscores.sort(function (a, b) {
//     //   return b.score - a.score;
//     // });

//     highscores.forEach(function (score) {
//       //create a list using each score
//       var liTag = document.createElement("li");
//       liTag.textContent = score.initials + " - " + score.score; //initials & score make var scoreNew from scropt.js which displays the user's info to them

//       //actually put the list on the page
//       var olEl = document.getElementById("highscores");
//       olEl.appendChild(liTag);
//     });
//   }
// }

// //invoke when highscore button is pushed
// printHighscores();

// //

// function clear() {
//   window.localStorage.setItem("highscores", "{}"); //'{}' stringifying an object (how it was made on script.js)
//   document.getElementById("highscores").style.visibility = "hidden";
// }

// clearBtn.addEventListener("click", clear);
