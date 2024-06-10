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

    if (humanChoice === computerChoice) {
        console.log("You both played " + humanChoice + ". It's a tie!");
    } else if ( humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" ) {
        console.log(humanChoice + " beats " + computerChoice + ". You win!");
        humanScore += 1;
    } else {
        console.log(computerChoice + " beats " + humanChoice + ". You lose!");
        computerScore += 1;;

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