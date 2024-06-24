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