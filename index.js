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

console.log(computerChoice);
console.log(humanChoice);

let result = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a draw!");
    return (result = 0);
  } else if (
    (humanChoice === "paper" && computerChoice === "scissor") ||
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "scissor" && computerChoice === "rock")
  ) {
    console.log("You Lose!");
    return (result = -1);
  } else {
    console.log("You Win!");
    return (result = 1);
  }
}

const humanSelection = getHumanChoice;
const computerSelection = getComputerChoice;

playRound(humanChoice, computerChoice);

console.log(result);

if (result === 1) {
  ++humanScore;
} else if (result === -1) {
  ++computerScore;
}

console.log(humanScore);
console.log(computerScore);
