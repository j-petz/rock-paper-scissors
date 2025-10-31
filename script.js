// Find number between 1 and 99
let rand = Math.floor(Math.random() * 99 + 1);

console.log(`Random number: ${rand}`);

// Declare variables for userScore and computerScore and set them to 0
var userScore = 0;
var computerScore = 0;

// Create function with the name 'getComputerChoice'
function getComputerChoice() {
    // If the number is 33 or less return the value 'Rock'
    if (rand <= 33) {
        return "rock";
    } else if (rand <= 66) {
        // If the number is 66 or less return the value 'Paper'
        return "paper";
    } else {
        // In any other case return the value 'Scissors'
        return "scissors";
    }
}

console.log(`Computer Choice: ${getComputerChoice()}`);

// Create function for user choice
function getUserChoice() {
    // Ask user to enter Rock Paper or Scissors in a Prompt
    let userChoice = prompt(
        "Choose Rock, Paper or Scissors",
        "Which will you choose?"
        // Transform the input to lowercase
    ).toLowerCase();
    console.log(`User Choice: ${userChoice}`);

    // Check if the selection equals one of the terms
    if (
        !(
            userChoice === "rock" ||
            userChoice === "paper" ||
            userChoice === "scissors"
        )
    ) {
        // If NOT log 'invalid input'
        console.log("Invalid choice. Please select Rock, Paper or Scissors");
    }
    return userChoice;
}
// Call function getUserChoice
//getUserChoice();

// Write function to play one round
function playRound(userChoice, computerChoice) {
    // Compare userChoice and computerChoice
    if (userChoice === "rock" && computerChoice === "scissors") {
        // Write the winner to the log
        console.log("Rock beats Scissors. You won!");
        // Increment the score for the winner by one
        userScore++;
    } else if (userChoice === "paper" && computerChoice === "rock") {
        console.log("Paper beats Rock. You won!");
        userScore++;
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        console.log("Scissors beats Paper. You won!");
        userScore++;
    } else if (userChoice === computerChoice) {
        console.log("It's a tie!");
    } else {
        console.log("You lose!");
        computerScore++;
    }
    console.log(`User Score: ${userScore} || Computer Score: ${computerScore}`);
}

const userSelection = getUserChoice();
const computerSelection = getComputerChoice();

playRound(userSelection, computerSelection);
