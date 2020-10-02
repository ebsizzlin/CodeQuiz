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
    var choiceBtn = document.createElement("ansChoices");
    choiceBtn.setAttribute("value", queries[currentQ].choices[i]);
    choiceBtn.textContent = queries[currentQ].choices[i];

    //click listeners
    choiceBtn.onclick = questionClick; // refering to next function
    //append so it shows up on page
    ansChoices.appendChild(choiceBtn);

    //*// choices aren't appearing in bootstrap button //*//
    //*// every question's choices are appending to the next question's choices //*//
    //*// to try: how to clear each round without deleting? am i using boostrap wrong? //*//
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

//click submit
//store initials and score in local storage
//show highscores list
//show highscore list in greatest-least order
//shouldn't calculate list unless there's another object -- error otherwise
//clear highscores button
//play again button
