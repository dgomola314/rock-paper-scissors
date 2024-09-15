function getComputerChoice() {
    const randomNumber = Math.round(Math.random() * 3);

    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const choice = prompt("Rock, paper or scissors?");

    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            return `${humanChoice.toUpperCase()} ${humanScore}:${computerScore} ${computerChoice.toUpperCase()}`;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            return `${humanChoice.toUpperCase()} ${humanScore}:${computerScore} ${computerChoice.toUpperCase()}`;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            return `${humanChoice.toUpperCase()} ${humanScore}:${computerScore} ${computerChoice.toUpperCase()}`;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            return `${humanChoice.toUpperCase()} ${humanScore}:${computerScore} ${computerChoice.toUpperCase()}`;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            return `${humanChoice.toUpperCase()} ${humanScore}:${computerScore} ${computerChoice.toUpperCase()}`;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            return `${humanChoice.toUpperCase()} ${humanScore}:${computerScore} ${computerChoice.toUpperCase()}`;
        } else {
            return `${humanChoice.toUpperCase()} ${humanScore}:${computerScore} ${computerChoice.toUpperCase()}`;
        }
    }

    while (round < 5) {
        const humanSelection = getHumanChoice().toLowerCase();
        const computerSelection = getComputerChoice();

        console.log(playRound(humanSelection, computerSelection));
        round++;
    }

    if (humanScore > computerScore) {
        return "You won!";
    } else if (humanScore < computerScore) {
        return "Computer won! Better luck next time.";
    } else {
        return "It's tie!";
    }
}

console.log(playGame());