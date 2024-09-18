function playGame() {
    // Necessary variables initialized on at the top of playGame function
    const humanResult = document.querySelector("#human-result");
    const computerResult = document.querySelector("#computer-result");
    const message = document.querySelector("#message");
    const finalMessage = document.querySelector("#final-message");
    const buttons = document.querySelectorAll(".button");
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;

    // getComputerChoice generates random choice by computer
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

    // playRound compares both choices and determines who should get a point
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            humanResult.textContent = `${humanScore}`;
            computerResult.textContent = `${computerScore}`;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            humanResult.textContent = `${humanScore}`;
            computerResult.textContent = `${computerScore}`;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            humanResult.textContent = `${humanScore}`;
            computerResult.textContent = `${computerScore}`;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            humanResult.textContent = `${humanScore}`;
            computerResult.textContent = `${computerScore}`;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            humanResult.textContent = `${humanScore}`;
            computerResult.textContent = `${computerScore}`;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            humanResult.textContent = `${humanScore}`;
            computerResult.textContent = `${computerScore}`;
        } else {
            humanResult.textContent = `${humanScore}`;
            computerResult.textContent = `${computerScore}`;
        }
    }

    // getHumanChoice allows the user to pick their choice by clicking on the one of the three adequate buttons
    function getHumanChoice(event) {
        const humanSelection = event.target.id;
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        message.textContent = `Computer chose ${computerSelection}`;
        document.querySelector("#reset").disabled = true;

        round++;
        if (round === 5) {
            endGame();
        }
    }

    // endGame determines the winner after 5 played rounds 
    function endGame() {
        if (humanScore > computerScore) {
            finalMessage.textContent += "You won!";
        } else if (humanScore < computerScore) {
            finalMessage.textContent += "Computer won!";
        } else {
            finalMessage.textContent += "It's tie!";
        }

        buttons.forEach(button => {
            button.disabled = true;
        });

        document.querySelector("#reset").disabled = false;
    }

    buttons.forEach(button => {
        button.addEventListener("click", getHumanChoice);
    });

    document.querySelector("#reset").onclick = function() {
        location.reload();
    };
}

playGame();