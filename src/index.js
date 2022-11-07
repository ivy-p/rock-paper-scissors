
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

// Populate the userChoiceDisplay with the id of the button the user clicked:
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.innerHTML;
    userChoiceDisplay.innerHTML = userChoice;

    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

  if (randomNumber === 1) {
    computerChoice = "🪨";
  } else if (randomNumber === 2) {
    computerChoice = "✂️";
  } else {
    computerChoice = "📃";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a draw!";
  } else if (computerChoice === "🪨" && userChoice === "📃") {
    result = "You win!";
  } else if (computerChoice === "🪨" && userChoice === "✂️") {
    result = "You lose!";
  } else if (computerChoice === "📃" && userChoice === "🪨") {
    result = "You lose!";
  } else if (computerChoice === "📃" && userChoice === "✂️") {
    result = "You win!";
  } else if (computerChoice === "✂️" && userChoice === "🪨") {
    result = "You win!";
  } else if (computerChoice === "✂️" && userChoice === "📃") {
    result = "You lose!";
  }

  resultDisplay.innerHTML = result;
}
