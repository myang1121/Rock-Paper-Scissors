// console.log("Hello World");

// In the flobal scope, keep track of players score
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // Generate random values from 0 to 1 (exclusive)
    let value = Math.random();
    // console.log(value);
    // If the value is less than 1/3
    if (value < 1/3) {
        // Return rock
        // console.log("Rock");
        return "Rock";

    // If the value is greater than 1/3 but less than 2/3
    } else if ((value >= 1/3) && (value < 2/3)) {
        // Return paper
        // console.log("Paper");
        return "Paper";

    // If the value is greater than 2/3 (else)
    } else {
        // Return scissors
        // console.log("Scissors");
        return "Scissors";
    }
}

function getHumanChoice() {
    // For now, assuming the user always enter a valid choice
    // Return user input collected using prompt method
    return prompt("Let's play \"rock,\" \"paper,\" \"scissors\"...SHOOT!");
}

// Play a single round, update score, and announce round winner
function playRound(humanChoice, computerChoice) {
    // If user inputs "rock" (case-insensitive)
    // Return rock

    // If the user inputs "paper" (case-insensitive)
    // Return paper

    // If the user inputs "scissors" (case-insensitive)
    // Return scissors

    // Announce round winner

    // Base on round winner, increment score for human or computer

}

// Play an entire game (5 rounds), keep track of scores, and declares winner at end
function playGame() {
    // Loop 5 times for 5 rounds
    // Call play rounds

    // Announce final winner at the end of the 5th round

}


// For testing during divide and conquer phase
// getComputerChoice();
console.log(getHumanChoice());
