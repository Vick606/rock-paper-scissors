function getComputerChoice() {
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

