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

function playRound(humanChoice, computerChoice) {}
