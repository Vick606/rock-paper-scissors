// Global variables to keep track of scores
let humanScore = 0;
let computerScore = 0;

// Function to get human player's choice
function getHumanChoice() {
    const userInput = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
    if (userInput === "rock" || userInput === "paper"  || userInput ==="scissors") {
        return userInput;
    } else {
        console.log("Invalid choice. Please enter rock, paper, or scissors");
        return getHumanChoice();
    }
    }
// Function to get comp's choice
function getComputerChoice() {
    const randomValue = Math.random();
    if (randomValue < 0.33) {
        return "rock";
    } else if (randomValue < 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}
// Function to play a single round
function playRound(humanChoice, computerChoice) {
    const humanChoiceLower = humanChoice.toLowerCase();

    // Determine the winner of the round
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

// Function to play the game
function playGame() {
    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    // Display current scores 
    console.log("Current scores: Human =", humanScore, "Computer =", computerScore);

    // Display final scores 
    console.log("Final scores: Human =", humanScore, "Computer =", computerScore);
}

// How to start game
playGame();


