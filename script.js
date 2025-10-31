// Find number between 1 and 99
let rand = Math.floor(Math.random() * 99 + 1);

console.log(rand);

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
    let userInput = prompt(
        "Choose Rock, Paper or Scissors",
        "Which will you choose?"
    ).toLowerCase();
    // Transform the input to lowercase
    console.log(`User Input: ${userInput}`);

    // Check if the selection equals one of the terms
    if (
        !(
            userInput === "rock" ||
            userInput === "paper" ||
            userInput === "scissors"
        )
    ) {
        // If NOT log 'invalid input'
        console.log("Invalid choice. Please select Rock, Paper or Scissors");
    }
}
// Call function getUserChoice
getUserChoice();
