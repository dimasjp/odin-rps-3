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
