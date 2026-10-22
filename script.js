function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomizeChoice = Math.floor(Math.random() * choices.length);
    return choices[randomizeChoice];
}

console.log(getComputerChoice());