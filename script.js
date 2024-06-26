let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

const resultDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');
const winnerDiv = document.getElementById('winner');
const newGameBtn = document.getElementById('newGame');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}
function playRound(playerSelection) {
    if (roundsPlayed >= 5) return;
    const computerSelection = getComputerChoice();
    let result;
    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        result = `You win! ${playerSelection} beats ${computerSelection}`;
        humanScore++;
    } else {
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }

    resultDiv.textContent = result;
    updateScore();

    roundsPlayed++;

    if (roundsPlayed === 5) {
        endGame();
    }
}

function updateScore() {
    scoreDiv.textContent = `Human (ME): ${humanScore}, Computer: ${computerScore}`;
}

function endGame() {
    let winner;
    if (humanScore > computerScore) {
        winner = "human";
    } else if (computerScore > humanScore) {
        winner = "computer";
    } else {
        winner = "It's a tie";
    }
    winnerDiv.textContent = `The winner for this round is ${winner} with ${Math.max(humanScore, computerScore)} wins.`;
    disableButtons();
    newGameBtn.disabled = false;
}

function disableButtons() {
    document.querySelectorAll('#buttons button').forEach(button => {
        button.disabled = true;
    });
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    resultDiv.textContent = '';
    winnerDiv.textContent = '';
    updateScore();
    enableButtons();
    newGameBtn.disabled = true;
}

function enableButtons() {
    document.querySelectorAll('#buttons button').forEach(button => {
        button.disabled = false;
    });
}

function initGame() {
    resetGame();
    newGameBtn.disabled = true;
}
// Event listeners to buttons
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
document.getElementById('newGame').addEventListener('click', resetGame);
newGameBtn.addEventListener('click', resetGame);

initGame();