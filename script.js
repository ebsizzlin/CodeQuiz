// timer variables
var currentQ = 0; //what question we're currently on //added later
var time = queries.length * 10; //the length of time given to a question/taken
var timer; //the timer en general

// ref variables
var startBtn = document.querySelector("#startBtn"); //start button
var questionDisplay = document.querySelector("#questionDisplay"); //show question
var ansChoices = document.querySelector("#ansChoices"); //show answer
var timeEl = document.querySelector("#time"); //timer/countdown
var quizShow = document.querySelector(".quizSection"); //question/choices displayed
var highscoreDisplay = document.querySelector("#highscore"); //displaying highscore
var initialsEl = document.querySelector("#initials"); //entering initials
var resultEl = document.querySelector("#result"); //notif for whether question was answered correctly or not
// var ansBtn = document.querySelector("#ansBtn"); //bootstrap button div

// start quiz button click
function startQuiz() {
  console.log("startQuiz:", startQuiz);
  quizShow.style.visibility = "visible"; //style.visibility "visible" or "hidden" is another way to do CSS styling, make it disappear until we summon it

  quizShow.setAttribute("class", "show"); //show the Qs and choices

  //start timer //help from tutor
  timer = setInterval(count, 1000);
  //display timer text
  timeEl.textContent = time;

  getQuestion(); //invoking function further down
}

startBtn.addEventListener("click", startQuiz);

function count() {
  //start countdown
  time--;
  //display timer text
  timeEl.textContent = time;

  //end quiz if time is 0
  if (time <= 0) {
    //added less than for negative
    endQuiz(); //invoking endQuiz function from later one here
  }
}

function getQuestion() {
  //get first question
  var currentQuestion = queries[currentQ]; // never invoked ???

  //get the right question title cycled through
  var qEl = document.getElementById("questionDisplay");
  qEl.textContent = currentQ.title;
  questionDisplay.textContent = queries[currentQ].question;

  //clearing choice button contents so they don't show up on the next question
  // document.getElementById("choices").innerHTML = "";

  //setting answers
  for (var i = 0; i < queries[currentQ].choices.length; i++) {
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("value", queries[currentQ].choices[i]);
    choiceBtn.textContent = queries[currentQ].choices[i];

    //click listeners
    choiceBtn.onclick = questionClick; // refering to next function
    //append so it shows up on page
    ansChoices.appendChild(choiceBtn);
  }
}

function questionClick() {
  // was it answered correctly ? if not, take off 10 seconds
  if (this.value !== queries[currentQ].answer) {
    //tutor lesson on . usage
    time - 10; //does this need to be equals instead ?

    if (time < 0) {
      //less than for negative
      time = 0;
    }

    //show time text
    timeEl.textContent = time;

    //alert whether they're right or wrong
    resultEl.textContent = "Wrong";
  } else {
    resultEl.textContent = "Correct";
  }

  //going to following question after being alerted and time potential drops, have to increment
  currentQ++;

  // if statement for stopping when there aren't anymore questions
  if (currentQ === queries.length) {
    endQuiz();
  } else {
    getQuestion(); //invoking previously made function
  }
}

function endQuiz() {
  //empty the timer, clear function ?
  clearInterval(timer);

  //prompt high score questions
  var highscoreEl = document.querySelector("#highscore");
  highscoreEl.setAttribute("class", "show");

  // display player's final score
  var final = document.querySelector("#finalScore");
  final.textContent = time;

  quizShow.setAttribute("class", "hide"); //sure

  quizShow.style.display = "none"; ////style.display "none" is another way to do CSS styling, this erases it so something else can take the space it was taking up
  highscoreDisplay.style.visibility = "visible"; ////style.visibility "visible" or "hidden" is another way to do CSS styling, make it disappear until we summon it
}

//save the score to local storage for highscore page
function saveHighscore() {
  var initials = initialsEl.value.trim(); //trim the spacing
  //require initials to be inputted
  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || []; //array added later, backup if local storage not working

  //show user what they've entered after they submit it
  var scoreNew = {
    score: time,
    initials: initials,
  };

  scoreNew.textContent;
  console.log("scoreNew:", scoreNew);

  //save it to the local storage
  // highscores.setAttribute(scoreNew);
  // window.localStorage.setItem("highscores", JSON.stringify(highscores)); //added JSON and stringify after consulting w classmates, not quite sure what it means yet

  //send to highscore page/html
  window.location.href = "highScore.html";
}

submitBtn.onclick = saveHighscore;
