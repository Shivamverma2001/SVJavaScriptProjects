const ques = [
  {
    question: "What is JavaScript?",
    answer: [
      {
        text: "JavaScript is a scripting language used to make the website interactive",
        correct: true,
      },
      {
        text: "JavaScript is a scripting language used to make the website interactive",
        correct: false,
      },
      {
        text: "JavaScript is a scripting language used to make the website interactive",
        correct: false,
      },
      {
        text: "JavaScript is a scripting language used to make the website interactive",
        correct: false,
      },
    ],
  },
  {
    question: "Which of the following is correct about JavaScript?",
    answer: [
      {
        text: "JavaScript is an Object-Based language",
        correct: true,
      },
      {
        text: "JavaScript is Assembly-language",
        correct: false,
      },
      {
        text: "JavaScript is an Object-Oriented language",
        correct: false,
      },
      {
        text: "JavaScript is a High-level language",
        correct: false,
      },
    ],
  },
  {
    question:
      " Among the given statements, which statement defines closures in JavaScript?",
    answer: [
      {
        text: "JavaScript is a function that is enclosed with references to its inner function scope",
        correct: false,
      },
      {
        text: "JavaScript is a function that is enclosed with references to its lexical environment",
        correct: true,
      },
      {
        text: "JavaScript is a function that is enclosed with the object to its inner function scope",
        correct: false,
      },
      {
        text: "None of the Above",
        correct: false,
      },
    ],
  },
  {
    question:
      "Arrays in JavaScript are defined by which of the following statements?",
    answer: [
      {
        text: "It is an ordered list of values",
        correct: true,
      },
      {
        text: "It is an ordered list of objects",
        correct: false,
      },
      {
        text: "It is an ordered list of string",
        correct: false,
      },
      {
        text: "It is an ordered list of functions",
        correct: false,
      },
    ],
  },
  {
    question: "Which of the following is not javascript data types?",
    answer: [
      {
        text: "Null type",
        correct: false,
      },
      {
        text: "Undefined type",
        correct: false,
      },
      {
        text: "Number type",
        correct: false,
      },
      {
        text: "All of the mentioned",
        correct: true,
      },
    ],
  },
  {
    question:
      "Where is Client-side JavaScript code is embedded within HTML documents?",
    answer: [
      {
        text: "A URL that uses the special javascript:code",
        correct: false,
      },
      {
        text: "A URL that uses the special javascript:protocol",
        correct: true,
      },
      {
        text: "A URL that uses the special javascript:encoding",
        correct: false,
      },
      {
        text: "A URL that uses the special javascript:stack",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
    answer: [
      {
        text: "Position",
        correct: false,
      },
      {
        text: "Window",
        correct: true,
      },
      {
        text: "Standard",
        correct: false,
      },
      {
        text: "Location",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which of the following can be used to call a JavaScript Code Snippet?",
    answer: [
      {
        text: "Function/Method",
        correct: true,
      },
      {
        text: "Preprocessor",
        correct: false,
      },
      {
        text: "Triggering Event",
        correct: false,
      },
      {
        text: "RMI",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which of the following explains correctly what happens when a JavaScript program is developed on a Unix Machine?",
    answer: [
      {
        text: "will work perfectly well on a Windows Machine",
        correct: true,
      },
      {
        text: "will be displayed as JavaScript text on the browser",
        correct: false,
      },
      {
        text: "will throw errors and exceptions",
        correct: false,
      },
      {
        text: "must be restricted to a Unix Machine only",
        correct: false,
      },
    ],
  },
  {
    question: "Which of the following scoping type does JavaScript use?",
    answer: [
      {
        text: "Sequential",
        correct: false,
      },
      {
        text: "Segmental",
        correct: false,
      },
      {
        text: "Lexical",
        correct: true,
      },
      {
        text: "Literal",
        correct: false,
      },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let curQuestionIndex = 0;
let score = 0;
function startQuiz() {
  curQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = ques[curQuestionIndex];
  let quesNo = curQuestionIndex + 1;
  questionElement.innerHTML = quesNo + ". " + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAns);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}
function selectAns(e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    score++;
    selectBtn.classList.add("correct");
  } else {
    selectBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${ques.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}
function handleNextButton() {
  curQuestionIndex++;
  if (curQuestionIndex < ques.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (curQuestionIndex < ques.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
