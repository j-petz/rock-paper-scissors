// Create function with the name 'getComputerChoice'
function getComputerChoice() {
    // Find number between 1 and 99
    let rand = Math.floor(Math.random() * 99 + 1);
    //console.log(`Random number: ${rand}`);

    // If the number is 33 or less return the value 'Rock'
    if (rand <= 33) {
        //console.log(`Computer Choice: rock`);
        return "rock";
    } else if (rand <= 66) {
        // If the number is 66 or less return the value 'Paper'
        //console.log(`Computer Choice: paper`);
        return "paper";
    } else {
        // In any other case return the value 'Scissors'
        //console.log(`Computer Choice: scissors`);
        return "scissors";
    }
}

// Create function for user choice
function getUserChoice() {
    // Ask user to enter Rock Paper or Scissors in a Prompt
    let userChoice = prompt(
        "Choose Rock, Paper or Scissors",
        "Which will you choose?"
        // Transform the input to lowercase
    ).toLowerCase();
    //console.log(`User Choice: ${userChoice}`);

    // Check if the selection equals one of the terms
    /* 
        => This brings up a bug later when the user and computer choice are logged and compared.
           In that case the user choice is still returning the old (wrong) value and the computer wins.
    */
    if (
        !(
            userChoice === "rock" ||
            userChoice === "paper" ||
            userChoice === "scissors"
        )
    ) {
        // If not, log 'invalid input'
        console.log("Invalid choice. Please select Rock, Paper or Scissors");
        // and call the function to get the user choice again (I don't know if this is a good idea – sounds dangerous)
        getUserChoice();
    }
    return userChoice;
}

// Write function to play a game with 5 rounds
function playGame() {
    // Declare variables for userScore and computerScore and set them to 0
    var userScore = 0;
    var computerScore = 0;

    // Write function to play one round
    function playRound(computerChoice, userChoice) {
        // Log the user and the computer choice
        console.log(
            `You chose: ${userChoice}. The computer chose ${computerChoice}.`
        );
        // Compare userChoice and computerChoice
        if (userChoice === "rock" && computerChoice === "scissors") {
            // Write the winner to the log
            console.log("Rock beats Scissors. You won this round!");
            // Increment the score for the winner by one
            userScore++;
        } else if (userChoice === "paper" && computerChoice === "rock") {
            console.log("Paper beats Rock. You won this round!");
            userScore++;
        } else if (userChoice === "scissors" && computerChoice === "paper") {
            console.log("Scissors beats Paper. You won this round!");
            userScore++;
        } else if (userChoice === computerChoice) {
            console.log("It's a tie!");
        } else {
            console.log("You lose this round!");
            computerScore++;
        }
        console.log(
            `User Score: ${userScore} || Computer Score: ${computerScore}`
        );
    }

    // Copy the function for user and computer choice
    const userSelection = getUserChoice;
    const computerSelection = getComputerChoice;

    // Play 5 rounds where each copy is INVOKED
    playRound(computerSelection(), userSelection());
    playRound(computerSelection(), userSelection());
    playRound(computerSelection(), userSelection());
    playRound(computerSelection(), userSelection());
    playRound(computerSelection(), userSelection());

    // Declare the final winner
    if (userScore > computerScore) {
        console.log(
            `You won ${userScore} out of 5 rounds. You are the winner of the match! 🥳`
        );
    } else if (computerScore > userScore) {
        console.log(
            `The computer won ${computerScore} out of 5 rounds. You lose the match ☹️`
        );
    } else {
        console.log(
            `You won ${userScore} and the computer won ${computerScore} out of 5 rounds. It\'s a tie!`
        );
    }
}

playGame();
