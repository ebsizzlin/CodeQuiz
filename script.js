// ref variables
var startBtn = document.querySelector("#startBtn");
console.log("startBtn:", startBtn);
var questionDisplay = document.querySelector("#questionDisplay");
console.log("questionDisplay:", questionDisplay);
var ansChoices = document.querySelector("ansChoices");
console.log("ansChoices:", ansChoices);

// start quiz button click
function startQuiz() {
  console.log("start quiz");
  startBtn.addEventListener("click", startQuiz);

  //display question
  console.log(queries.question);
  questionDisplay.textContent = queries[0].question;

  //display choices
  for (var i = 0; i < queries[0].choices.length; i++) {
    console.log(queries.choices);
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("value", queries[0].choices[i]);
    choiceBtn.textContent = queries[0].choices[i];

    choiceBtn.addEventListener("click", choiceClick);
    ansChoices.appendChild(choiceBtn);
  }

  //alert correct/incorrect
}

function choiceClick() {
  console.log("btn click");
}

function endQuiz() {}

// for loop through the options, add event listener

// if / else statement for correct answer and wrong answer
