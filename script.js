let playerPoints = 0;
let computerPoints = 0;
let draws = 0;

function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        draws++;
        return;
    }
    if (playerSelection === "rock") {
        if (computerSelection === "scissor") {
            playerPoints++;
        } else {
            computerPoints++;
        }
        return;
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerPoints++;
        } else {
            computerPoints++;
        }
        return;
    }
    if (playerSelection === "scissor") {
        if (computerSelection === "paper") {
            playerPoints++;
        } else {
            computerPoints++;
        }
        return;
    }
}

function computerPlay() {
    var choice = Math.ceil(Math.random() * (3 - 0) + 0) - 1;
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else {
        return "scissor";
    }
}

function game(event) {
    let playerSelection = "rock";
    let computerSelection = "rock";
    let keyCode = 0;

    
    if (event.type === "keydown") {
        keyCode = event.keyCode;
    } else if (event.type === "click") {
        keyCode = event.originalTarget.attributes[1].value;
    }

    switch (keyCode.toString()) {
        case "49":
            playerSelection = "rock";
            break;
        case "50":
            playerSelection = "paper";
            break;
        case "51":
            playerSelection = "scissor";
            break;
        default:
            return;
    }

    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);

    let selectionText = document.querySelector("#selection");
    selectionText.textContent = `${playerSelection} vs ${computerSelection}`.toUpperCase();

    let resultText = document.querySelector('#result');
    resultText.textContent = `Player: ${playerPoints.toString()} - Computer: ${computerPoints.toString()} - Draws: ${draws.toString()}`;

    if (playerPoints === 5) {
        selectionText.textContent  = "PLAYER WINS!!";
        resultText.textContent = "Play again by selecting a move";
        playerPoints = 0;
        computerPoints = 0;
        draws = 0;
    } else if (computerPoints === 5) {
        selectionText.textContent = "COMPUTER WINS!!";
        resultText.textContent = "Play again by selecting a move";
        playerPoints = 0;
        computerPoints = 0;
        draws = 0;
    }
}

const buttons = document.querySelectorAll(".button");
buttons.forEach(button => button.addEventListener('click', game));


window.addEventListener('keydown', game);
