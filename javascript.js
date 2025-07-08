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
   console.log(`Computer threw ${computerChoice}`);
   console.log(`You threw ${humanChoice}`);
   
   // If tie
   if ((computerChoice === "Rock" && humanChoice === "Rock") || (computerChoice === "Paper" && humanChoice === "Paper") || (computerChoice === "Scissors" && humanChoice === "Scissors")) {
        // Score does not increment, announce tie
        return `Computer threw ${computerChoice}, you threw ${humanChoice}.<br>No one wins! ${computerChoice} and ${humanChoice} tie!`;

    // If human wins
   } else if ((computerChoice === "Rock" && humanChoice === "Paper") || (computerChoice === "Scissors" && humanChoice === "Rock") || (computerChoice === "Paper" && humanChoice === "Scissors")) {
        // Increment score for human
        humanScore += 1;
        // Announce human as round winner
        return `Computer threw ${computerChoice}, you threw ${humanChoice}.<br>You win! ${humanChoice} beats ${computerChoice}`;

    // If computer wins (else)
   } else {
        // Increment score for computer
        computerScore += 1;
        // Announce computer as round winner
        return `Computer threw ${computerChoice}, you threw ${humanChoice}.<br>You lost! ${computerChoice} beats ${humanChoice}`;
   }
}

// Play an entire game (5 rounds), keep track of scores, and declares winner at end
function playGame() {
    

    

    // Announce final winner at the end of the 5th round
    // If score of computer is higher than score of human
    if (computerScore > humanScore) {
        // Computer wins
        return `With a score of ${humanScore}:${computerScore}, you lost!`;
    // If score of human is higher than score of computer (else)
    } else if (humanScore > computerScore) {
        // Human wins
        return `With a score of ${humanScore}:${computerScore}, you won!`;

    // If score of human and computer is the same (else)
    } else {
        // Tie
        return `With a score of ${humanScore}:${computerScore}, there is a tied!`;
    }
}


// For testing during divide and conquer phase
// getComputerChoice();
// console.log(getHumanChoice());
// console.log(playRound(getHumanChoice(), getComputerChoice()));
// console.log(playGame());

const parent = document.querySelector("body");
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";

parent.appendChild(rock);
parent.appendChild(paper);
parent.appendChild(scissors);

let winner = document.createElement("p");
let finalWinner = document.createElement("p");
let round = 0;
// const fiveRounds = new CustomEvent("fiveRounds");
rock.addEventListener("click", () => {
    winner.innerHTML = playRound("Rock", getComputerChoice());    
    parent.appendChild(winner);
    round ++;
    if (round === 5) {
        finalWinner.textContent = playGame();
        parent.appendChild(finalWinner);
        reset();
        //round = 0;
        
        // document.dispatchEvent(fiveRounds);
        // document.addEventListener("fiveRounds", () => {
        //     finalWinner.textContent = playGame();
        //     parent.appendChild(finalWinner);
        // });
    }
    // if (round === 6) {
    //     round = 1;
    //     parent.removeChild(finalWinner);
    // }
    
});
paper.addEventListener("click", () => {
    winner.innerHTML = playRound("Paper", getComputerChoice());
    parent.appendChild(winner);
    round ++;
    if (round === 5) {
        finalWinner.textContent = playGame();
        parent.appendChild(finalWinner);
        reset();
        //round = 0;
        
        // document.dispatchEvent(fiveRounds);
        // document.addEventListener("fiveRounds", () => {
        //     finalWinner.textContent = playGame();
        //     parent.appendChild(finalWinner);
        // });
    }
    // if (round === 6) {
    //     round = 1;
    //     parent.removeChild(finalWinner);
    // }
});
scissors.addEventListener("click", () => {
    winner.innerHTML = playRound("Scissors", getComputerChoice());
    parent.appendChild(winner);
    round ++;
    if (round === 5) {
        finalWinner.textContent = playGame();
        parent.appendChild(finalWinner);
        reset();
        //round = 0;
        
        // document.dispatchEvent(fiveRounds);
        // document.addEventListener("fiveRounds", () => {
        //     finalWinner.textContent = playGame();
        //     parent.appendChild(finalWinner);
        // });
    }
    // if (round === 6) {
    //     round = 1;
    //     parent.removeChild(finalWinner);
    // }
});

// fiveRounds.addEventListener("fiveRounds", () => {
//     playGame();
// });

function reset () {
    round = 0;
    humanScore = 0;
    computerScore = 0;
    parent.removeChild(winner);
    parent.removeChild(finalWinner);
};





