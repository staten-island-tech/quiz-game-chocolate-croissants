const questions = [
  {
    question: "What is 6+3×2?",
    choice1: "A) 18",
    choice2: "B) 12",
    choice3: "C) 15",
    choice4: "D) 11",
    correct: "B",
  },
  {
    question: "Who painted the Mona Lisa?",
    choice1: "A) Leonardo DiCaprio",
    choice2: "B) Vincent van Gogh",
    choice3: "C) Leonardo da Vinci",
    choice4: "D) Pablo Picasso",
    correct: "C",
  },
  {
    question: "What is the most common color toilet paper in France?",
    choice1: "A) pink",
    choice2: "B) green",
    choice3: "C) white",
    choice4: "D) blue",
    correct: "A",
  },
  {
    question: "Where was the fortune cookie invested?",
    choice1: "A) Hong Kong",
    choice2: "B) Rome",
    choice3: "C) San Francisco",
    choice4: "D) Moscow",
    correct: "C",
  },
  {
    question: "It's illegal in Texas to put what on your neighbour’s Cow?",
    choice1: "A) saddle",
    choice2: "B) graffiti",
    choice3: "C) poop",
    choice4: "D) hand sanitizer",
    correct: "B",
  },
  {
    question: "What is the most streamed show on Netlfix in 2020?",
    choice1: "A) Lucifer",
    choice2: "B) Umbrella Academy",
    choice3: "C) Stranger Things",
    choice4: "D) Riverdale",
    correct: "B",
  },
  {
    question: "What is the biggest animal in the world?",
    choice1: "A) blue whale",
    choice2: "B) giraffe",
    choice3: "C) your mom",
    choice4: "D) elephant",
    correct: "A",
  },
  {
    question: "What is the third longest river in the world?",
    choice1: "A) Nile",
    choice2: "B) Amazon",
    choice3: "C) Google",
    choice4: "D) Yangtze",
    correct: "D",
  },
  {
    question:
      "Alnwick Castle in England is used for the exterior shots in which film?",
    choice1: "A) Bridgerton",
    choice2: "B) Outlaw King",
    choice3: "C) Harry Potter",
    choice4: "D) Macbeth",
    correct: "C",
  },
  {
    question: "How many grapes go into a bottle of wine?",
    choice1: "A) 5",
    choice2: "B) 1000",
    choice3: "C) 700",
    choice4: "D) 200",
    correct: "C",
  },
];

let numCorrect = 0;
let questionNumber = 0;
const mainButton = document.getElementById("main-btn");
const exitButton = document.getElementById("exit-btn");

function insertQuestionVars(qNum) {
  const title = document.getElementById("main-title");
  const question = document.getElementById("question");
  const choice1 = document.getElementById("choice1");
  const choice2 = document.getElementById("choice2");
  const choice3 = document.getElementById("choice3");
  const choice4 = document.getElementById("choice4");
  title.innerText = `Question Number ${qNum + 1}`;
  question.innerText = questions[qNum].question;
  choice1.innerText = questions[qNum].choice1;
  choice2.innerText = questions[qNum].choice2;
  choice3.innerText = questions[qNum].choice3;
  choice4.innerText = questions[qNum].choice4;
}

exitButton.onclick = function () {
  location.reload();
};

function findWhichChoiceIsSelected(num) {
  const c1 = document.getElementsByName("1")[0];
  const c2 = document.getElementsByName("1")[1];
  const c3 = document.getElementsByName("1")[2];
  const c4 = document.getElementsByName("1")[3];
  if (c1.checked == true) {
    c1.checked = false;
    if ("A" == questions[num].correct) {
      numCorrect++;
    }
  } else if (c2.checked == true) {
    c2.checked = false;
    if ("B" == questions[num].correct) {
      numCorrect++;
    }
  } else if (c3.checked == true) {
    c3.checked = false;
    if ("C" == questions[num].correct) {
      numCorrect++;
    }
  } else if (c4.checked == true) {
    c4.checked = false;
    if ("D" == questions[num].correct) {
      numCorrect++;
    }
  }
}

mainButton.addEventListener("click", function () {
  const top80 = document.getElementById("top80");
  const numberQuestions = questions.length;
  if (questionNumber == 0) {
    mainButton.innerHTML = "Next";
    top80.style.opacity = "1";
    insertQuestionVars(questionNumber);
    questionNumber += 1;
  } else if (questionNumber < numberQuestions - 1) {
    findWhichChoiceIsSelected(questionNumber - 1);
    insertQuestionVars(questionNumber);
    questionNumber += 1;
  } else if (questionNumber == numberQuestions - 1) {
    mainButton.innerHTML = "Grade Quiz";
    findWhichChoiceIsSelected(questionNumber - 1);
    insertQuestionVars(questionNumber);
    questionNumber += 1;
  } else if (questionNumber == numberQuestions) {
    const top60 = document.getElementById("choices");
    const title = document.getElementById("main-title");
    mainButton.innerHTML = "Grade Quiz";
    findWhichChoiceIsSelected(questionNumber - 1);
    questionNumber += 1;
    top60.style.opacity = "0";
    title.innerText = "You finished the Quiz";
    question.innerText = `You got ${numCorrect}/${numberQuestions}`;
    mainButton.innerHTML = "Retake";
  } else {
    location.reload();
  }
});
