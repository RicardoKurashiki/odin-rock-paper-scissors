let playerPoints = 0;
let computerPoints = 0;
let draws = 0;

function playRound(playerSelection, computerSelection) {
    console.log("Player chose: " + playerSelection);
    console.log("Computer chose: " + computerSelection);

    if (computerSelection === playerSelection) {
        console.log("Draw!");
        draws++;
        return;
    }
    if (playerSelection === "rock") {
        if (computerSelection === "scissor") {
            console.log("Player wins!");
            playerPoints++;
        } else {
            console.log("Computer wins!");
            computerPoints++;
        }
        return;
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("Player wins!");
            playerPoints++;
        } else {
            console.log("Computer wins!");
            computerPoints++;
        }
        return;
    }
    if (playerSelection === "scissor") {
        if (computerSelection === "paper") {
            console.log("Player wins!");
            playerPoints++;
        } else {
            console.log("Computer wins!");
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

function game() {
    let remainingRounds = 1;
    let playerSelection = "rock";
    let computerSelection = "rock";
    while (remainingRounds <= 5) {
        console.log("Round " + remainingRounds.toString());
        console.log("Player - Computer - Draws");
        console.log(playerPoints.toString() + " - " + computerPoints.toString() + " - " + draws.toString());
        playerSelection = prompt("Rock, paper or scissor?").toLowerCase().trim();
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        remainingRounds++;
    }
    console.log("RESULTS:");
    console.log("Player: " + playerPoints.toString());
    console.log("Computer: " + computerPoints.toString());
    console.log("Draws: " + draws.toString());
    if (draws >= 3) {
        console.log("IT'S A DRAW!!!");
    } else if (playerPoints > computerPoints) {
        console.log("PLAYER WINS!!!");
    } else {
        console.log("COMPUTER WINS!!!");
    }
}

game();