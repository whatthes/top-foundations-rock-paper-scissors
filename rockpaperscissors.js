function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

function getComputerChoice() {
    let computerChoice = getRandomInt(1,4); //max number is exclusive

    switch (computerChoice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function getHumanChoice() {
    //human input
    //let humanChoice = prompt("Enter value rock, paper, or scissors", "rock");
    //computer vs computer
    let humanChoice = prompt("Enter value rock, paper, or scissors", getComputerChoice());
    
    return humanChoice;
}

function playGame(){
    function playRound(humanChoice1,computerChoice1) {
        humanChoice = String(humanChoice1).toLowerCase();
        computerChoice = String(computerChoice1).toLowerCase();
    
        if (humanChoice == computerChoice){
            console.log("Its a draw!");
        }
        if (humanChoice == "rock" && computerChoice =="scissors"){
            console.log("You Win! Rock beats Scissors");
            humanScore++;
        }
        if (humanChoice == "rock" && computerChoice =="paper"){
            console.log("You Lose! Paper beats Rock");
            computerScore++;
        }
        if (humanChoice == "scissors" && computerChoice =="paper"){
            console.log("You Win! Scissors beats Paper");
            humanScore++;
        }
        if (humanChoice == "scissors" && computerChoice =="rock"){
            console.log("You Lose! Rock beats Scissors");
            computerScore++;
        }
        if (humanChoice == "paper" && computerChoice =="rock"){
            console.log("You Win! Paper beats Rock");
            humanScore++;
        }
        if (humanChoice == "paper" && computerChoice =="scissors"){
            console.log("You Lose! Scissors beats Paper");
            computerScore++;
        }
        roundsPlayed++;
        console.log("Current Human Score: " + humanScore);
        console.log("Current Computer Score: " + computerScore);
        console.log("Rounds played: "+ roundsPlayed);
        console.log("-----------------------------------")
    }

    let roundsPlayed = 0;

    let humanScore = 0;
    let computerScore = 0;

    // let humanSelection = getHumanChoice();
    // let computerSelection = getComputerChoice();

    // console.log("human: " + humanSelection);
    // console.log("computer: " + computerSelection);

    // playRound(humanSelection,computerSelection);
    
    // humanSelection = getHumanChoice();
    // computerSelection = getComputerChoice();
    // console.log("human: " + humanSelection);
    // console.log("computer: " + computerSelection);
    // playRound(humanSelection,computerSelection);
    
    // humanSelection = getHumanChoice();
    // computerSelection = getComputerChoice();
    // console.log("human: " + humanSelection);
    // console.log("computer: " + computerSelection);
    // playRound(humanSelection,computerSelection);

    
    // humanSelection = getHumanChoice();
    // computerSelection = getComputerChoice();
    // console.log("human: " + humanSelection);
    // console.log("computer: " + computerSelection);
    // playRound(humanSelection,computerSelection);

    // humanSelection = getHumanChoice();
    // computerSelection = getComputerChoice();
    // console.log("human: " + humanSelection);
    // console.log("computer: " + computerSelection);
    // playRound(humanSelection,computerSelection);

    for (let step = 0; step < 5; step++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        console.log("human: " + humanSelection);
        console.log("computer: " + computerSelection);

        playRound(humanSelection,computerSelection);
    }

    console.log("Final Human Score: " + humanScore);
    console.log("Final Computer Score: " + computerScore);
}

playGame();