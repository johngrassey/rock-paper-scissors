// Create variable humanScore and computerScore

let humanScore = 0;
let computerScore = 0;

// Create function called getComputerChoice

function getComputerChoice() {

    // Create variable computerChoice
    let computerChoice;

    // Create variable randomComputerNumber
    // Generate Random Number between 0 and 1, multiply by 3, and round down to nearest integer. Assign to variable randomComputerNumber
    let randomComputerNumber = Math.floor((Math.random() * 3));

    // If randomComputerNumber = 0, set computerChoice to "Rock"
    if (randomComputerNumber === 0) {
        computerChoice = "Rock";

    // If randomComputerNumber = 1, set computerChoice to "Paper"

    } else if (randomComputerNumber === 1){
        computerChoice = "Paper";

    // If randomComputerNumber = 2, set computerChoice to "Scissors"   

    } else {
        computerChoice = "Scissors";
        
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

//Print computerChoice to console
console.log(getHumanChoice());

// Print computerChoice to console
console.log(getComputerChoice());