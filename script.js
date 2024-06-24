// Global variables to keep track of scores
let humanScore = 0;
let computerScore = 0;

 // Function to get comp's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    // Generate a random no btwn 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);
    // Return "rock", "paper", or "scissors" depending on the value randomly generated
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
// Function to get human player's choice
function getHumanChoice() {
    // Prompt the user to enter their choice
    let choice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();

    // Validate the user's input
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice! Please enter either rock, paper, or scissors").toLowerCase();
    }

    // Return the validated choice
    return choice;
}
// Function to play a single round
function playRound(humanChoice, computerChoice) {
    // Make the humanChoice case-insensitive
    humanChoice = humanChoice.toLowerCase();

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
    // Variables to keep track of scores
    let humanScore = 0;
    let computerScore = 0;
    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const roundWinner = playRound(humanChoice, computerChoice);

         // Debug logs to trace the winner and score increment
         console.log(`Round ${i + 1} winner: ${roundWinner}`);
         console.log(`Current scores before increment - Human: ${humanScore}, Computer: ${computerScore}`);

        // Increment the score based on the winner
        if (roundWinner === 'human') {
            humanScore += 20; // Increment by 20 points for each win
            console.log(`Human wins round ${i + 1}, current human score: ${humanScore}`); // Log the updated human score
        } else if (roundWinner === 'computer') {
            computerScore += 20; // Increment by 20 points for each win
            console.log(`Computer wins round ${i + 1}, current computer score: ${computerScore}`); // Log the updated computer score
        } else {
            console.log(`Round ${i + 1} is a tie, no points awarded.`);
        }
        // Log the current scores
        console.log(`End of round ${i + 1}: Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    }
    // Declare the final winner
    if (humanScore > computerScore) {
        console.log(`You win the game! Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lose the game! Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log(`The game is a tie! Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    }
}

// How to start game
playGame();


