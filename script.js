// Create function called getComputerChoice

function getComputerChoice() {

    // Create variable computerChoice
    let computerChoice;

    // Create variable randomComputerNumber
    // Generate Random Number between 0 and 1, multiply by 3, and round down to nearest integer. Assign to variable randomComputerNumber
    let randomComputerNumber = Math.floor((Math.random() * 3));

    // If randomComputerNumber = 0, set computerChoice to "Rock"
    if (randomComputerNumber === 0) {
        computerChoice = "rock";

    // If randomComputerNumber = 1, set computerChoice to "Paper"

    } else if (randomComputerNumber === 1){
        computerChoice = "paper";

    // If randomComputerNumber = 2, set computerChoice to "Scissors"   

    } else {
        computerChoice = "scissors";
        
    };

    // Return computerChoice
    return computerChoice
}

// Create function called getHumanChoice
function getHumanChoice() {

    // Ask the user to "Rock, Paper, Scissors?" store it in new variable, humanChoice
    let humanChoice = prompt("Rock, Paper, Scissors?","");



    // Return variable humanChoice
    return humanChoice;
}

// Create function called playRound with two inputs, humanChoice and computerChoice
function playRound(humanChoice, computerChoice) {

//Convert humanChoice to lowercase.

    humanChoice = String(humanChoice).toLowerCase();

//Scoring logic.

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
        if (computerChoice === "rock") { console.log("Paper beats Rock. You win!");
            console.log("Scissors beats Paper. You win!");
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

// Create variable humanScore and computerScore
let humanScore = 0;
let computerScore = 0;

playGame();