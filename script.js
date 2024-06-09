// Create function called getComputerChoice

function getComputerChoice() {

    let computerChoice;
    let randomComputerNumber = Math.floor((Math.random() * 3));

    if (randomComputerNumber === 0) {
        computerChoice = "rock";
    } else if (randomComputerNumber === 1){
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    };

    return computerChoice
}

function getHumanChoice() {

    let humanChoice = prompt("Rock, Paper, Scissors?","");
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {

    humanChoice = String(humanChoice).toLowerCase();

    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            console.log("You both played Rock. It's a tie!");
            
        } else if (computerChoice === "scissors") {
            console.log("Rock beats Scissors. You win!");
            humanScore += 1;

        } else {
            console.log("Paper beats Rock. You lose!");
            computerScore += 1;
        };

    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("Rock beats Scissors. You lose!");
            computerScore += 1;

        } else if (computerChoice === "scissors") {
            console.log("You both played Scissors. It's a tie!");

        } else {
            console.log("Scissors beats Paper. You win!");
            humanScore += 1;
        };   

    } else {
        if (computerChoice === "rock") {
            console.log("Paper beats Rock. You win!");
            humanScore += 1;

        } else if (computerChoice === "scissors") {
            console.log("Scissors beats paper. You lose!");
            computerScore += 1;

        } else {
            console.log("You both played Paper. It's a tie!");
        };   
    };

}

function playGame() {

    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie!");
    };

}

let humanScore = 0;
let computerScore = 0;

playGame();