var initialsEl = document.querySelector("#initials"); //entering initials
var submitBtn = document.querySelector("#submitBtn"); //button
var hideHighScore = document.querySelector("#hidehighscore"); //hs hide button
var showHighScore = document.querySelector("#showhighscore"); //hs show button
var highScoreList = document.querySelector("#highscoreList"); //list of hs + again / clear buttons

function saveHighscore() {




  var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  console.log("highscores:", highscores);
  highscores.textContent = [];

    var scoreNew = {
      score: time,
      initials: initials,
    };

    highscores.push(scoreNew);
    localStorage.setItem("highscores", JSON.stringify(highscores));
  });
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
/////////////////////////////

//save the score to local storage for highscore page
// function saveHighscore() {
//   var initials = initialsEl.value.trim(); //trim the spacing
//   //require initials to be inputted
//   var highscores = JSON.parse(window.localStorage.getItem("highscores")) || []; //array added later, backup if local storage not working

//   //show user what they've entered after they submit it
//   var scoreNew = {
//     score: time,
//     initials: initials,
//   };

//   scoreNew.textContent;
//   console.log("scoreNew:", scoreNew);

//   //save it to the local storage
//   // highscores.setAttribute(scoreNew);
//   // window.localStorage.setItem("highscores", JSON.stringify(highscores)); //added JSON and stringify after consulting w classmates, not quite sure what it means yet

//   //send to highscore page/html
//   window.location.href = "highScore.html";
// }

/////////////////////////

// var highScore = document.querySelector("#highscores");
// var clear = document.querySelector("#clearBtn");
// var playAgain = document.querySelector("#againBtn");

//clear scores
// clear.addEventListener("click", function () {
//   localStorage.clear();
//   location.reload();
// });
// //bring back from local stroage
// var allScores = localStorage.getItem("allScores");
// allScores = JSON.parse(allScores);

// if (allScores !== null) {
//   for (var i = 0; i < allScores.length; i++) {
//     var createLi = document.createElement("li");
//     createLi.textContent = allScores[i].initials + " " + allScores[i].score;
//     highScore.appendChild(createLi);
//   }
// // }
// // //
// playAgain.addEventListener("click", function () {
//   window.location.replace("index.html");
// });

/////////////////////////

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

// for (var i = 0; i < currentQuestion.choices.length; i++) {
//   var choiceBtn = document.createElement("button"); //<button></button>
//   choiceBtn.setAttribute("type", "button"); //<button type="button"></button>
//   choiceBtn.setAttribute("class", "btn btn-secondary btn-lg btn-block");
//   choiceBtn.setAttribute("value", currentQuestion.choices[i]);

//   choiceBtn.textContent = currentQuestion.choices[i];
