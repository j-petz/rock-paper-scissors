// Find number between 1 and 99
let rand = Math.floor(Math.random() * 99 + 1);

console.log(rand);

// Create function with the name 'computerChoice'
function computerChoice() {
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

console.log(computerChoice());
