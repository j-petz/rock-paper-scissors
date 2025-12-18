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

const buttons = document.querySelectorAll(".wrapper button");
buttons.forEach((button) => {
    button.addEventListener("click", playRound);
});

let userScore = 0;
let computerScore = 0;
let ties = 0;
let rounds = 0;

let message = document.querySelector("#message");
message.setAttribute("style", "white-space: pre");

function playRound(e) {
    let userChoice = e.target.dataset.value;
    let computerChoice = getComputerChoice();

    let score = document.querySelector("#score");
    score.setAttribute("style", "white-space: pre");

    message.textContent = `You chose: ${userChoice}. || The computer chose ${computerChoice}.`;

    // Compare userChoice and computerChoice
    if (userChoice === "rock" && computerChoice === "scissors") {
        message.textContent += `\r\nRock beats Scissors.\r\nYou won this round!`;
        userScore++;
    } else if (userChoice === "paper" && computerChoice === "rock") {
        message.textContent += `\r\nPaper beats Rock.\r\nYou won this round!`;
        userScore++;
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        message.textContent += `\r\nScissors beats Paper.\r\nYou won this round!`;
        userScore++;
    } else if (userChoice === computerChoice) {
        message.textContent += `\r\nIt's a tie!`;
        ties++;
    } else if (computerChoice === "rock" && userChoice === "scissors") {
        message.textContent += `\r\nRock beats Scissors.\r\nYou lose this round!`;
        computerScore++;
    } else if (computerChoice === "paper" && userChoice === "rock") {
        message.textContent += `\r\nPaper beats Rock.\r\nYou lose this round!`;
        computerScore++;
    } else if (computerChoice === "scissors" && userChoice === "paper") {
        message.textContent += `\r\nScissors beats Paper.\r\nYou lose this round!`;
        computerScore++;
    }
    rounds++;
    score.textContent = `User: ${userScore} || Computer: ${computerScore} || Ties: ${ties}`;

    // Declare the final winner
    if (userScore == 5) {
        score.textContent += `\r\nYou won ${userScore} out of ${rounds} rounds.\r\nYou are the winner of the match! 🥳`;
        buttons.forEach((button) => (button.disabled = true));
    } else if (computerScore == 5) {
        score.textContent += `\r\nThe computer won ${computerScore} out of ${rounds} rounds.\r\nYou lose the match ☹️`;
        buttons.forEach((button) => (button.disabled = true));
    }
}

// TODO: add reset button
let btnRestart = document.querySelector("#restart");
btnRestart.addEventListener("click", restartGame);

function restartGame() {
    buttons.forEach((button) => (button.disabled = false));
    userScore = 0;
    computerScore = 0;
    ties = 0;
    message.textContent = "";
    score.textContent = "";
}
