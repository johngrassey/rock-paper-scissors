let buttons = document.querySelectorAll("button");
let results = document.querySelector(".results");

let humanScore = 0;
let computerScore = 0;

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

    humanChoice = String(humanChoice).toLowerCase();

    if (humanChoice === computerChoice) {
        results.textContent = "The computer played " + computerChoice + ". It's a tie!";
    } else if ( humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" ) {
        results.textContent = "The computer played " + computerChoice + ". " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice + ". You win!";
        humanScore += 1;
    } else {
        results.textContent = "The computer played " + computerChoice + ". " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice + ". You lose!";
        computerScore += 1;;
    };

}

// function playGame() {

//     playRound(getHumanChoice(), getComputerChoice());
//     // playRound(getHumanChoice(),getComputerChoice());
//     // playRound(getHumanChoice(),getComputerChoice());
//     // playRound(getHumanChoice(),getComputerChoice());
//     // playRound(getHumanChoice(),getComputerChoice());

//     if (humanScore > computerScore) {
//         console.log("You win the game!");
//     } else if (humanScore < computerScore) {
//         console.log("You lose the game!");
//     } else {
//         console.log("It's a tie!");
//     };

// }

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

// playGame();