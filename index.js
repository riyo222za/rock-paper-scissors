// function to get the computer to randomly pick a choice

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    console.log("The computer picked paper");
    return (computerChoice = "paper");
  } else if (computerChoice === 2) {
    console.log("The computer picked scissor");
    return (computerChoice = "scissor");
  } else if (computerChoice === 3) {
    console.log("The computer picked rock");
    return (computerChoice = "rock");
  }
}

// function to ask the user to input a choice

function getHumanChoice() {
  humanChoice = prompt("rock, paper, scissor?").toLowerCase();
  console.log("You picked " + humanChoice);
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

let result = 0;
let roundsPlayed = 0;

// Function to play a round and determine a winner, it also keeps score and rounds played

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a draw!");
    ++roundsPlayed;
    return (result = 0);
  } else if (
    (humanChoice === "paper" && computerChoice === "scissor") ||
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "scissor" && computerChoice === "rock")
  ) {
    console.log("You Lose!");
    ++computerScore;
    ++roundsPlayed;
    return (result = -1);
  } else {
    console.log("You Win!");
    ++humanScore;
    ++roundsPlayed;
    return (result = 1);
  }
}

// The game function plays the game 5 times and declares a winner

function playGame() {
  alert("Lets play a game!");
  playRound(getHumanChoice(), getComputerChoice());

  alert(
    "The score is " +
      "Your score " +
      humanScore +
      " | " +
      "Computer Score " +
      computerScore
  );
  alert("Rounds 2");
  playRound(getHumanChoice(), getComputerChoice());

  alert(
    "The score is " +
      "Your score " +
      humanScore +
      " | " +
      "Computer Score " +
      computerScore
  );
  alert("Rounds 3");
  playRound(getHumanChoice(), getComputerChoice());

  alert(
    "The score is " +
      "Your score " +
      humanScore +
      " | " +
      "Computer Score " +
      computerScore
  );
  alert("Rounds 4");
  playRound(getHumanChoice(), getComputerChoice());

  alert(
    "The score is " +
      "Your score " +
      humanScore +
      " | " +
      "Computer Score " +
      computerScore
  );
  alert("Rounds 5");
  playRound(getHumanChoice(), getComputerChoice());
  alert(
    "The score is " +
      "Your score " +
      humanScore +
      " | " +
      "Computer Score " +
      computerScore
  );
  if (humanScore === computerScore) {
    alert("Its a draw!");
  } else if (humanScore > computerScore) {
    alert("You Win!");
  } else {
    alert("The Computer Wins!");
  }
}

playGame();
