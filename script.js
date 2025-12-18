// Rock, Paper, Scissors Game
function getComputerChoice() {
    let rand = Math.floor(Math.random() * 99 + 1);
    if (rand <= 33) {
        return "rock";
    } else if (rand <= 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", playRound);
});

let userScore = 0;
let computerScore = 0;

let result = document.querySelector("#result");
result.setAttribute("style", "white-space: pre");

function playRound(e) {
    let userChoice = e.target.dataset.value;
    let computerChoice = getComputerChoice();

    let score = document.querySelector("#score");
    score.setAttribute("style", "white-space: pre");

    result.textContent = `You chose: ${userChoice}. || The computer chose ${computerChoice}.`;

    // Compare userChoice and computerChoice
    if (userChoice === "rock" && computerChoice === "scissors") {
        result.textContent += `\r\nRock beats Scissors.\r\nYou won this round!`;
        userScore++;
    } else if (userChoice === "paper" && computerChoice === "rock") {
        result.textContent += `\r\nPaper beats Rock.\r\nYou won this round!`;
        userScore++;
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        result.textContent += `\r\nScissors beats Paper.\r\nYou won this round!`;
        userScore++;
    } else if (userChoice === computerChoice) {
        result.textContent += `\r\nIt's a tie!`;
    } else {
        result.textContent += `\r\nYou lose this round!`;
        computerScore++;
    }
    score.textContent = `User: ${userScore} || Computer: ${computerScore}`;

    // Declare the final winner
    if (userScore == 5) {
        score.textContent += `\r\nYou won ${userScore} out of 5 rounds.\r\nYou are the winner of the match! 🥳`;
        buttons.forEach((button) => (button.disabled = true));
    } else if (computerScore == 5) {
        score.textContent += `\r\nThe computer won ${computerScore} out of 5 rounds.\r\nYou lose the match ☹️`;
        buttons.forEach((button) => (button.disabled = true));
    }
}
