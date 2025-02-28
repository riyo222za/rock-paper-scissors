console.log("Hello World!");

let getComputerChoice = Math.floor(Math.random() * 3) + 1;

console.log(getComputerChoice);

switch (getComputerChoice) {
  case 1:
    getComputerChoice = "paper";
    break;
  case 2:
    getComputerChoice = "scissor";
    break;
  case 3:
    getComputerChoice = "rock";
    break;
}

console.log(getComputerChoice);

let getHumanChoice = prompt("rock, paper, scissors?").toLowerCase();

console.log(getHumanChoice);

let humanScore = 0;
let computerScore = 0;

let humanChoice = getHumanChoice;
let computerChoice = getComputerChoice;

console.log(humanChoice);
console.log(computerChoice);

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a draw!");
  } else if (
    (humanChoice === "paper" && computerChoice === "scissor") ||
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "scissor" && computerChoice === "rock")
  ) {
    console.log("You Lose!");
  } else {
    console.log("You Win!");
  }
}

const humanSelection = getHumanChoice;
const computerSelection = getComputerChoice;

playRound(humanChoice, computerChoice);

function keepHumanScore() {
  if (playRound() === "You Win!") {
    humanScore++1 ;
  }
}

console.log(humanScore);
