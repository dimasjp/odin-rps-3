let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomizeChoice = Math.floor(Math.random() * choices.length);
    return choices[randomizeChoice];
}

function getPlayerChoice() {
    let playerChoice = prompt("Choose rock, paper, or scissors:").toLowerCase();
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

const result = playRound(playerSelection, computerSelection);
console.log(result);
console.log(`Player Score: ${playerScore}`);
console.log(`Computer Score: ${computerScore}`);