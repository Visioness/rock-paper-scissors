let humanScore = 0;
let computerScore = 0;
let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  let state = prompt("Rock? Paper? Scissors?");
  if (state === null) return null;
  return isValid(state.toLowerCase()) ? state.toLowerCase() : getHumanChoice(); 
}

function isValid(state) {
  return choices.includes(state);
}

function playRound(humanChoice, computerChoice) {
  let states = ["rock", "scissors", "paper"]
  let humanIndex = states.indexOf(humanChoice);
  let computerIndex = states.indexOf(computerChoice);
  if (((humanIndex < computerIndex) && (computerIndex - 2 !== humanIndex)) || ((humanIndex > computerIndex) && (humanIndex - 2 === computerIndex))) {
    console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}.`)
    humanScore++;
  } else if (humanIndex === computerIndex) {
    console.log("Draw!");
  } else {
    console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.`)
    computerScore++;
  }
}

function playGame() {
  let computerSelection;
  let humanSelection;
  for (let i = 1; i < 6; i++) {
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();

    if (humanSelection === null) return "Canceled the game!";
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) console.log("YOU WON!");
  else if (humanScore == computerScore) console.log("DRAW!");
  else console.log("YOU LOST!");
}