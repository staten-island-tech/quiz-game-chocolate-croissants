const questions = [
  {
    question: "What is the square root of pi?",
    choice1: "A",
    choice2: "B",
    choice3: "C",
    choice4: "D",
  },
  {
    question: "Donald Trump",
    choice1: "1",
    choice2: "R",
    choice3: "R",
    choice4: "R",
  },
  {
    question: "Donald Trump",
    choice1: "1",
    choice2: "R",
    choice3: "R",
    choice4: "R",
  },
  {
    question: "Donald Trump",
    choice1: "1",
    choice2: "R",
    choice3: "R",
    choice4: "R",
  },
  {
    question: "Donald Trump",
    choice1: "1",
    choice2: "R",
    choice3: "R",
    choice4: "R",
  },
  {
    question: "Donald Trump",
    choice1: "1",
    choice2: "R",
    choice3: "R",
    choice4: "R",
  },
  {
    question: "Donald Trump",
    choice1: "1",
    choice2: "R",
    choice3: "R",
    choice4: "R",
  },
  {
    question: "Donald Trump",
    choice1: "1",
    choice2: "R",
    choice3: "R",
    choice4: "R",
  },
  {
    question: "Donald Trump",
    choice1: "1",
    choice2: "R",
    choice3: "R",
    choice4: "R",
  },
  {
    question: "Donald Trump",
    choice1: "1",
    choice2: "R",
    choice3: "R",
    choice4: "R",
  },
];

const btn = document.getElementById("next-btn");
const question = document.getElementById("question");

btn.onclick = function () {
  question.innerHTML = questions[0].question;
};
