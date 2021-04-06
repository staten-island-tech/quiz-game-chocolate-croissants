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

const questionFormat = `
<div class='main-center'>
  <div class='top80'>
    <h2 class='question' id='question'></h2>
    <div class='choices'>
      <div class='choice-a'>
        <input class='choices-btn choice-1' name='1' type='radio' value='A'>
        <label></label>
      </div>
      <div class='choice-b'>
        <input class='choices-btn choice-2' name='1' type='radio' value='B'>
        <label></label>
      </div>
      <div class='choice-c'>
        <input class='choices-btn choice-3' name='1' type='radio' value='C'>
        <label></label>
      </div>
      <div class='choice-d'>
        <input class='choices-btn choice-4' name='1' type='radio' value='D'>
        <label></label>
      </div>
    </div>
  </div>
  <div class='bottom'>
    <div class='back'>
      <button class='back-btn' id='back-btn'>Back</button>
    </div>
    <div class='next'>
        <button class='next-btn' id='next-btn'>Next</button>
    </div>
  </div>
</div>
`;

const start = document.getElementById("startbtn");

start.onclick = function () {
  console.log("click");
  document.getElementById("main").innerHTML += questionFormat;
  console.log("2");
};
