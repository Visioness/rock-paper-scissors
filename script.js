const choices = ["rock", "scissors", "paper"];
let humanChoice;
let humanScore = 0;
let computerScore = 0;
let round = 1;

const match = document.querySelector("#match");
const score = document.querySelector("#score");
const winner = document.querySelector("#winner"); 
const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");
const buttonReplay = document.querySelector("#replay");

const buttonsRPS = [buttonRock, buttonScissors, buttonPaper];

buttonsRPS.forEach(button => {
  button.addEventListener("click", () => {
    if (!isGameOver()) {
      humanChoice = button.id;
      playRound(humanChoice);
      updateScoreboard();
    }

    if (isGameOver()) {
      buttonRock.disabled = true;
      buttonPaper.disabled = true;
      buttonScissors.disabled = true;
      buttonReplay.style.visibility = "visible";
      winner.textContent = humanScore === 5 ? "Player Won" : "Computer Won";
    }
  });  
})

buttonReplay.addEventListener("click", () => {
  resetGame();
});

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice) {
  let computerChoice = getComputerChoice();
  let humanIndex = choices.indexOf(humanChoice);
  let computerIndex = choices.indexOf(computerChoice);
  
  // Rock Paper Scissors logic
  if (((humanIndex < computerIndex) && (computerIndex - 2 !== humanIndex)) || ((humanIndex > computerIndex) && (humanIndex - 2 === computerIndex))) {
    match.textContent = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}.`;
    humanScore++;
  } else if (humanIndex === computerIndex) {
    match.textContent = "Draw!";
  } else {
    match.textContent = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.`;
    computerScore++;
  }
}

function updateScoreboard() {
  score.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;
  winner.textContent = `Round ${++round}`;
}

function isGameOver() {
  return humanScore === 5 || computerScore === 5;
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  round = 0;
  buttonRock.disabled = false;
  buttonPaper.disabled = false;
  buttonScissors.disabled = false;
  buttonReplay.style.visibility = "hidden";
  match.textContent = "Press one of the buttons to start!";
  updateScoreboard();
}