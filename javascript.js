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
   // humanChoice case-insensitive
   humanChoice = (humanChoice.slice(0, 1)).toUpperCase() + (humanChoice.slice(1)).toLowerCase();
   console.log(`Computer chose ${computerChoice}`);
   console.log(`You chose ${humanChoice}`);
   
   // If tie
   if ((computerChoice === "Rock" && humanChoice === "Rock") || (computerChoice === "Paper" && humanChoice === "Paper") || (computerChoice === "Scissors" && humanChoice === "Scissors")) {
        // Score does not increment, announce tie
        return `No one wins! ${computerChoice} and ${humanChoice} tie!`;

    // If human wins
   } else if ((computerChoice === "Rock" && humanChoice === "Paper") || (computerChoice === "Scissors" && humanChoice === "Rock") || (computerChoice === "Paper" && humanChoice === "Scissors")) {
        // Increment score for human
        humanScore += 1;
        // Announce human as round winner
        return `You win! ${humanChoice} beats ${computerChoice}`;

    // If computer wins (else)
   } else {
        // Increment score for computer
        computerScore += 1;
        // Announce computer as round winner
        return `You lost! ${computerChoice} beats ${humanChoice}`;
   }
}

// Play an entire game (5 rounds), keep track of scores, and declares winner at end
function playGame() {
    // Loop 5 times for 5 rounds
    // Call play rounds

    // Announce final winner at the end of the 5th round

}


// For testing during divide and conquer phase
// getComputerChoice();
// console.log(getHumanChoice());
// console.log(playRound(getHumanChoice(), getComputerChoice()));
