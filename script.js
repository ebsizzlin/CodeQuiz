// timer variables
var currentQ = 0; //what question we're currently on //added later
var time = queries.length * 10; //the length of time given to a question/taken
var timer; //the timer en general
//var score

// ref variables
var startBtn = document.querySelector("#startBtn"); //start button
var questionDisplay = document.querySelector("#questionDisplay"); //show question
var ansChoices = document.querySelector("#ansChoices"); //show answer
var timeEl = document.querySelector("#time"); //timer/countdown
var quizShow = document.querySelector(".quizSection"); //question/choices displayed
var highscoreDisplay = document.querySelector("#highscore"); //displaying highscore
var resultEl = document.querySelector("#result"); //notif for whether question was answered correctly or not
var submitBtn = document.querySelector("#submitBtn"); //submit hs btn

function startQuiz() {
  quizShow.style.visibility = "visible"; //style.visibility "visible" or "hidden" is another way to do CSS styling, make it disappear until we summon it

  quizShow.setAttribute("class", "show"); //show the Qs and choices

  //start timer //help from tutor
  timer = setInterval(count, 1000);
  //display timer text
  timeEl.textContent = time;

  startBtn.setAttribute("class", "hide");

  getQuestion(); //invoking function further down
}

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
  var currentQuestion = queries[currentQ];

  //get the right question title cycled through
  questionDisplay.textContent = currentQuestion.question;

  //clearing choice button contents so they don't show up on the next question
  ansChoices.innerHTML = "";

  //setting answers
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var choiceBtn = document.createElement("button"); //<button></button>
    choiceBtn.setAttribute("type", "button"); //<button type="button"></button>
    choiceBtn.setAttribute("class", "btn btn-secondary btn-lg btn-block");
    choiceBtn.setAttribute("value", currentQuestion.choices[i]);

    choiceBtn.textContent = currentQuestion.choices[i];

    // <button
    //  type="button"
    //  class="btn btn-secondary btn-lg btn-block"
    // ></button>

    //click listeners
    choiceBtn.onclick = questionClick; // refering to next function
    //append so it shows up on page
    ansChoices.appendChild(choiceBtn);
  }
}

function questionClick(event) {
  // was it answered correctly ? if not, take off 10 seconds

  console.log("click", event.target);
  console.log("this", this);
  if (this.value !== queries[currentQ].answer) {
    //tutor lesson on . usage
    time -= 10; //does this need to be equals instead ?

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
    //score += 4
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
  final.textContent = time; //change to 'final'

  quizShow.setAttribute("class", "hide"); //sure

  quizShow.style.display = "none"; ////style.display "none" is another way to do CSS styling, this erases it so something else can take the space it was taking up
  highscoreDisplay.style.visibility = "visible"; ////style.visibility "visible" or "hidden" is another way to do CSS styling, make it disappear until we summon it
}
//[] for empty array
function saveHighscore() {
  //parse turns it into js
  var highscores = JSON.parse(window.localStorage.getItem('highscore')) || [];

  var scoreNew = {
    score: time,
    initials: initials.value.trim(),
  };

  //pushing the array
  highscores.push(scoreNew);
  window.localStorage.setItem('highscore', JSON.stringify(highscores))
  //(key, item)
  //stringify turns it from an array to a string

  console.log("scoreNew:", scoreNew);
}

startBtn.addEventListener("click", startQuiz);
//how to also save initials/score when clicking submit ?
submitBtn.addEventListener("click", function () {
  saveHighscore();
  document.location.href = "highscore.html";
});

//order the highscores
//css cleanup the highscore list