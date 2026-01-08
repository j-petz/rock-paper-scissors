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

let scoreUser = document.querySelector(".score-user");
scoreUser.textContent = userScore;

let scoreComputer = document.querySelector(".score-computer");
scoreComputer.textContent = computerScore;

let scoreTies = document.querySelector(".ties");
scoreTies.textContent = ties;

let selectionUser = document.querySelector("#selection-user");
let selectionComputer = document.querySelector("#selection-computer");

function playRound(e) {
    let userChoice = e.target.dataset.value;
    let computerChoice = getComputerChoice();

    message.style.padding = "8px";

    let result = document.querySelector("#result");
    result.setAttribute("style", "white-space: pre");

    selectionUser.textContent = e.target.textContent;

    if (computerChoice === "rock") {
        selectionComputer.textContent = "🪨";
    } else if (computerChoice === "paper") {
        selectionComputer.textContent = "📃";
    } else if (computerChoice === "scissors") {
        selectionComputer.textContent = "✂️";
    }

    // Compare userChoice and computerChoice
    if (userChoice === "rock" && computerChoice === "scissors") {
        message.textContent = `Rock beats Scissors.\r\nYou won this round! 😁`;
        selectionComputer.style.border = "none";
        selectionUser.style.border = "4px solid goldenrod";
        userScore++;
    } else if (userChoice === "paper" && computerChoice === "rock") {
        message.textContent = `Paper beats Rock.\r\nYou won this round! 😁`;
        selectionComputer.style.border = "none";
        selectionUser.style.border = "4px solid goldenrod";
        userScore++;
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        message.textContent = `Scissors beats Paper.\r\nYou won this round! 😁`;
        selectionComputer.style.border = "none";
        selectionUser.style.border = "4px solid goldenrod";
        userScore++;
    } else if (userChoice === computerChoice) {
        message.textContent = `It's a tie!`;
        selectionComputer.style.border = "none";
        selectionUser.style.border = "none";
        ties++;
    } else if (computerChoice === "rock" && userChoice === "scissors") {
        message.textContent = `Rock beats Scissors.\r\nYou lose this round! ☹️`;
        selectionUser.style.border = "none";
        selectionComputer.style.border = "4px solid goldenrod";
        computerScore++;
    } else if (computerChoice === "paper" && userChoice === "rock") {
        message.textContent = `Paper beats Rock.\r\nYou lose this round! ☹️`;
        selectionUser.style.border = "none";
        selectionComputer.style.border = "4px solid goldenrod";
        computerScore++;
    } else if (computerChoice === "scissors" && userChoice === "paper") {
        message.textContent = `Scissors beats Paper.\r\nYou lose this round! ☹️`;
        selectionUser.style.border = "none";
        selectionComputer.style.border = "4px solid goldenrod";
        computerScore++;
    }
    rounds++;
    scoreUser.textContent = userScore;
    scoreComputer.textContent = computerScore;
    scoreTies.textContent = ties;

    if (userScore > computerScore) {
        scoreUser.style.color = "goldenrod";
        scoreComputer.style.color = "#666";
    } else if (computerScore > userScore) {
        scoreComputer.style.color = "goldenrod";
        scoreUser.style.color = "#666";
    } else {
        scoreUser.style.color = "#666";
        scoreComputer.style.color = "#666";
    }

    // Declare the final winner
    if (userScore == 5) {
        result.textContent = `You won ${userScore} out of ${rounds} rounds.\r\nYou are the winner of the match! 🥳`;
        result.style.padding = "8px";
        btnRestart.style.backgroundColor = "goldenrod";
        btnRestart.style.color = "#222";
        buttons.forEach((button) => (button.disabled = true));
    } else if (computerScore == 5) {
        result.textContent = `The computer won ${computerScore} out of ${rounds} rounds.\r\nYou lose the match 😢`;
        result.style.padding = "8px";
        btnRestart.style.backgroundColor = "goldenrod";
        btnRestart.style.color = "#222";
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
    rounds = 0;
    selectionUser.textContent = "";
    selectionComputer.textContent = "";
    selectionUser.style.border = "none";
    selectionComputer.style.border = "none";
    message.textContent = "";
    message.style.padding = "0";
    result.textContent = "";
    result.style.padding = "0";
    scoreUser.textContent = userScore;
    scoreComputer.textContent = computerScore;
    scoreTies.textContent = ties;
    scoreUser.style.color = "#666";
    scoreComputer.style.color = "#666";
    btnRestart.style.backgroundColor = "#333";
    btnRestart.style.color = "#666";
}
