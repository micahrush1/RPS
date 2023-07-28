// Player and Computer original score
let playerCount = 0;
let computerCount = 0;
// UI integration of score
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const scoreBoardPlayer= playerScore.innerHTML = playerCount.toString();
const scoreBoardComputer = computerScore.innerHTML = computerCount.toString();
const scoreBoardPlayerText = document.getElementById("playerScore").innerText="Player Score: "+scoreBoardPlayer;
const scoreBoardComputerText =document.getElementById("computerScore").innerText="Computer Score: "+scoreBoardComputer;
// Random method for Computer 
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Function to get choice
function getComputerChoice() {
  const a = getRndInteger(1, 3);
  if (a === 1) {
    return "Scissors";
  } else if (a === 2) {
    return "Rock";
  } else if (a === 3) {
    return "Paper";
  }
}
// Game with user input and computer choice
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie!";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "Player win!";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "Computer win!";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "Player win!";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return "Computer win!";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "Player win!";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return "Computer win!";
  }
}
// Changes score based on return of game
function updateScores(result) {
  if (result === "Player win!") {
    playerCount++;
  } else if (result === "Computer win!") {
    computerCount++;
  }
  playerScore.innerHTML = playerCount.toString();
  computerScore.innerHTML = computerCount.toString();
}
// Game plays to 5 points
function checkGameStatus() {
  if (playerCount >= 5) {
    alert("Congratulations! You've won the game!");
    resetGame();
  } else if (computerCount >= 5) {
    alert("Computer wins! Better luck next time.");
    resetGame();
  }
}
// Reset game after points have been reached 
function resetGame() {
  playerCount = 0;
  computerCount = 0;
  playerScore.innerHTML = playerCount.toString();
  computerScore.innerHTML = computerCount.toString();
}
// Rock button function connected to UI 
const buttonRock = window.document.getElementById("button").addEventListener("click", () => {
  const playerSelection = "Rock";
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  updateScores(result);
  checkGameStatus();
});
// Paper button function connected to UI
const buttonPaper = window.document.getElementById("button2").addEventListener("click", () => {
  const playerSelection = "Paper";
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  updateScores(result);
  checkGameStatus();
});
//Scissors button function connected to UI 
  const buttonScissors = window.document.getElementById("button3").addEventListener("click", () => {
  const playerSelection = "Scissors";
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  updateScores(result);
  checkGameStatus();
});
// Manipulation for CSS && HTML 
var buttonSuperMan = document.getElementById("button");
buttonSuperMan.innerHTML="<img src=RPS_RPS-img/Rock.png>";
var buttonGoku = document.getElementById("button2");
buttonGoku.innerHTML ="<img src=RPS_RPS-img/Paper.png>";
var buttonOnePunchMan = document.getElementById("button3");
buttonOnePunchMan.innerHTML ="<img src=RPS_RPS-img/Scissors.png>";


