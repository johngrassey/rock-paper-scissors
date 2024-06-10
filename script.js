let compResults = document.querySelector(".compresults");
let userResults = document.querySelector(".userresults");
let resultsMessage = document.querySelector(".resultsmessage");

let userScoreDisplay = document.querySelector(".userscore");
let compScoreDisplay = document.querySelector(".computerscore");
let endOfGame = document.querySelector(".endgame");

let humanScore = 0;
let computerScore = 0;

userScoreDisplay.textContent = humanScore.toString();
compScoreDisplay.textContent = computerScore.toString();

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

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        compResults.textContent = "The computer played " + computerChoice + "."
        userResults.textContent = "You played " + humanChoice + "."
        resultsMessage.textContent = "It's a tie!";
    } else if ( humanChoice === "rock" && computerChoice === "scissors" ||
                humanChoice === "scissors" && computerChoice === "paper" ||
                humanChoice === "paper" && computerChoice === "rock") {

        compResults.textContent = "The computer played " + computerChoice + "."
        userResults.textContent = "You played " + humanChoice + "."
        resultsMessage.textContent = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice + ". You win!";
        humanScore += 1;
        userScoreDisplay.textContent = humanScore.toString();
        endGame();
    } else {
        compResults.textContent = "The computer played " + computerChoice + "."
        userResults.textContent = "You played " + humanChoice + "."
        resultsMessage.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice + ". You lose!";
        computerScore += 1;
        compScoreDisplay.textContent = computerScore.toString();
        endGame();
    };

}

function endGame() {
    if (humanScore === 5) {
        endOfGame.textContent = "GAME OVER: You Win!";
    } else if (computerScore === 5) {
        endOfGame.textContent = "GAME OVER: You lose";
    };
};

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => {
    let humanChoice = "rock";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});
paper.addEventListener("click", () => {
    let humanChoice = "paper";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});
scissors.addEventListener("click", () => {
    let humanChoice = "scissors";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});