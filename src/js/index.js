const questions = [
  {
    question: "Question 1",
    choice1: "A",
    choice2: "B",
    choice3: "C",
    choice4: "D",
    correct: "",
  },
  {
    question: "Question 2",
    choice1: "A",
    choice2: "B",
    choice3: "C",
    choice4: "D",
    correct: "",
  },
  {
    question: "Question 3",
    choice1: "A",
    choice2: "B",
    choice3: "C",
    choice4: "D",
    correct: "",
  },
  {
    question: "Question 4",
    choice1: "A",
    choice2: "B",
    choice3: "C",
    choice4: "D",
    correct: "",
  },
  {
    question: "Question 5",
    choice1: "A",
    choice2: "B",
    choice3: "C",
    choice4: "D",
    correct: "",
  },
  {
    question: "Question 6",
    choice1: "A",
    choice2: "B",
    choice3: "C",
    choice4: "D",
    correct: "",
  },
  {
    question: "Question 7",
    choice1: "A",
    choice2: "B",
    choice3: "C",
    choice4: "D",
    correct: "",
  },
  {
    question: "Question 8",
    choice1: "A",
    choice2: "B",
    choice3: "C",
    choice4: "D",
    correct: "",
  },
  {
    question: "Question 9",
    choice1: "A",
    choice2: "B",
    choice3: "C",
    choice4: "D",
    correct: "",
  },
  {
    question: "Question 10",
    choice1: "A",
    choice2: "B",
    choice3: "C",
    choice4: "D",
    correct: "",
  },
];

const questionFormat = `
<div class='main-center'>
  <div class='top80'>
    <h2 class='question' id='question'></h2>
    <div class='choices'>
      <div class='choice-a'>
        <input class='choices-btn choice-1' name='1' type='radio' value='A'>
        <label id="choice1"></label>
      </div>
      <div class='choice-b'>
        <input class='choices-btn choice-2' name='1' type='radio' value='B'>
        <label id="choice2"></label>
      </div>
      <div class='choice-c'>
        <input class='choices-btn choice-3' name='1' type='radio' value='C'>
        <label id="choice3"></label>
      </div>
      <div class='choice-d'>
        <input class='choices-btn choice-4' name='1' type='radio' value='D'>
        <label id="choice4"></label>
      </div>
    </div>
  </div>
  <div class='bottom'>
    <div class='back'>
      <button class='exit-btn' id='exit-btn'>Exit</button>
    </div>
    <div class='next'>
        <button class='next-btn' id='next-btn'>Next</button>
    </div>
  </div>
</div>
`;
const numberQuestions = questions.length;
let number = numberQuestions;
const mainButton = document.getElementById("main-btn");
const exitButton = document.getElementById("exit-button");

mainButton.onclick = function () {
  const top80 = document.getElementById("top80");

  const title = document.getElementById("main-title");
  const question = document.getElementById("question");
  const choice1 = document.getElementById("choice1");
  const choice2 = document.getElementById("choice2");
  const choice3 = document.getElementById("choice3");
  const choice4 = document.getElementById("choice4");

  const nextButton = document.getElementById("next-button");

  number -= 1;
  if (number == numberQuestions) {
    mainButton.innerHTML = "Start";
  } else if (number < numberQuestions && number > 0) {
    mainButton.innerHTML = "Next";
    top80.style.opacity = "1";
  } else if (number == 0) {
    mainButton.innerHTML = "Grade Quiz";
  } else {
    mainButton.setAttribute("disabled", "true");
  }

  //startButton.insertAdjacentHTML("beforebegin", questionFormat);
};

exitButton.onclick = function () {
  console.log("we quitting");
};
