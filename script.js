// timer variables
var currentQ = 0; //what question we're currently on //added later
var time = queries.length * 15; //the length of time given to a question/taken
var timer; //the timer en general

// ref variables
var startBtn = document.querySelector("#startBtn"); //start button
var questionDisplay = document.querySelector("#questionDisplay"); //show question
var ansChoices = document.querySelector("#ansChoices"); //show answer
var timeEl = document.querySelector("#time"); //timer/countdown
var quizShow = document.querySelector("#quizSection"); //question/choices displayed
var highscoreDisplay = document.querySelector("#highscore"); //displaying highscore
var initialsEl = document.querySelector("#initials"); //entering initials
var resultEl = document.querySelector("#result"); //notif for whether question was answered correctly or not

// start quiz button click
function startQuiz() {
  // startBtn.addEventListener("click", getQuestion);
  startBtn.onclick = getQuestion;

  quizShow.setAttribute("class", "show"); //idk if these work
  highscoreDisplay.setAttribute("class", "hide"); //idk if these work

  //start timer //help from tutor
  timer = setInterval(tick, 1000);
  //display timer text
  timeEl.textContent = time;

  getQuestion(); //invoking function further down
}

function tick() {
  //start countdown
  time--;
  //display timer text
  timeEl.textContent = time;

  //end quiz if time is 0
  if (time <= 0) {
    //added less than for negative
    endQuiz();
  }
}

function getQuestion() {
  //get first question
  var currentQuestion = queries[currentQ];

  //get the right question title cycled through
  var titleEl = document.getElementById("questionDisplay");
  titleEl.textContent = currentQ.title;
  questionDisplay.textContent = queries[0].question;

  //for loop for choices
  for (var i = 0; i < queries[0].choices.length; i++) {
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("value", queries[0].choices[i]);
    choiceBtn.textContent = queries[0].choices[i];

    //click listeners
    choiceBtn.onclick = questionClick; // refering to next function
    //append so it shows up on page
    ansChoices.appendChild(choiceBtn);
  }
}

function questionClick() {
  // was it answered correctly ? if not, take off 15 seconds
  if (this.value !== queries[currentQ].answer) {
    //tutor lesson on . usage
    time - 15; //does this need to be equals instead ?

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

  //going to following question after being alerted and time potential drops
  currentQ++; //tutor helped w what these smaller notation mean

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

  quizShow.setAttribute("class", "hide"); //looked up something that this said it would make the questions/answers div disappear but im not sure if it works
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

  //save it to the local storage
  highscores.push(scoreNew);
  window.localStorage.setItem("highscores", JSON.stringify(highscores)); //added JSON and stringify after consulting w classmates, not quite sure what it means yet

  //send to highscore page/html
  window.location.href = "highScore.html";
}

submitBtn.onclick = saveHighscore;
