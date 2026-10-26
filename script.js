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

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

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

    for (let i = 1; i <= 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(`Round ${i}`);
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Current Score | Player: ${playerScore}, Computer: ${computerScore}`);
    }

    if (playerScore > computerScore) {
        console.log("You won the game!")
    } else if (computerScore > playerScore) {
        console.log("You lost the game!")
    } else {
        console.log("The game is a tie!")
    }

    console.log(`FINAL SCORE | Player: ${playerScore}, Computer: ${computerScore}`)
}