const playerPointsEl = document.getElementById("playerPoints");
const computerPointsEl = document.getElementById("computerPoints");
const result = document.getElementById("result");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const resetButton = document.getElementById("resetButton");
const computerChoiceEl = document.getElementById("computerChoiceEl")
const  playerSelectionEl = document.getElementById("playerChoiceEl")

rock.addEventListener("click", rockChoice);
paper.addEventListener("click", paperChoice);
scissors.addEventListener("click", scissorsChoice);
resetButton.addEventListener("click", startOver);

let computerPoints = 0
let playerPoints = 0
let computerSelection = "";
let playerSelection = "";

function rockChoice() {
    playerSelection = "rock";
    playRound();
}
function paperChoice() {
    playerSelection = "paper";
    playRound();
}
function scissorsChoice() {
    playerSelection = "scissors";
    playRound();
}

function getComputerChoice() {
   let randomNum = Math.floor(Math.random() * 3)
   computerChoiceEl.style.display = "block";
   if(randomNum === 0) {
    computerChoiceEl.textContent = "The computer chose: " + "rock";
    return "rock"
   }
   else if(randomNum === 1) {
    computerChoiceEl.textContent = "The computer chose: " + "paper";
    return "paper"
   }
   else {
    computerChoiceEl.textContent = "The computer chose: " + "scissors";
    return "scissors"
   }

}


function playRound() {
    if(playerPoints !== 5 && computerPoints !== 5 ) {
    result.style.display="block";
    computerSelection = getComputerChoice();
    playerChoiceEl.textContent = "Player chose: " + playerSelection
    playerChoiceEl.style.display = "block";
    if(playerSelection === "rock" && computerSelection === "rock") {
        console.log("Tie")
        result.textContent = "Tie";
    }
    else if(playerSelection === "rock" && computerSelection === "paper") {
        console.log("Computer wins")
        computerPoints += 1;
        result.textContent = "Computer wins the round";
        computerPointsEl.textContent = "Computer points: " + computerPoints
    }
    else if(playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Player wins")
        playerPoints += 1;
        result.textContent = "Player wins the round";
        playerPointsEl.textContent = "Player points: " + playerPoints
    }
    else if(playerSelection === "paper" && computerSelection === "scissors") {
        console.log("Computer wins")
        computerPoints += 1;
        result.textContent = "Computer wins the round";
        computerPointsEl.textContent = "Computer points: " + computerPoints
    }
    else if(playerSelection === "paper" && computerSelection === "paper") {
        console.log("tie")
        result.textContent = "Tie";
    }
    else if(playerSelection === "paper" && computerSelection === "rock") {
        console.log("Player wins")
        playerPoints += 1;
        result.textContent = "Player wins the round";
        playerPointsEl.textContent = "Player points: " + playerPoints
    }
    else if(playerSelection === "scissors" && computerSelection === "scissors") {
        console.log("tie")
        result.textContent = "Tie";
    }
    else if(playerSelection === "scissors" && computerSelection === "rock") {
        console.log("Computer wins")
        computerPoints += 1;
        result.textContent = "Computer wins the round";
        computerPointsEl.textContent = "Computer points: " + computerPoints
    }
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        console.log("Player wins")
        playerPoints += 1;
        result.textContent = "Player wins the round";
        playerPointsEl.textContent = "Player points: " + playerPoints
    }
}
    console.log("Player:" + playerPoints)
    console.log("Computer:" + computerPoints)
    whoWins()
}   

function whoWins() {
if(playerPoints === 5) {
    result.style.backgroundColor = "#950000";
    result.style.color = "white";
    result.textContent = "THE PLAYER WON THE GAME!!!";
}
else if (computerPoints === 5) {
    result.style.backgroundColor = "#950000";
    result.style.color = "white";
    result.textContent = "THE COMPUTER WON THE GAME!!!"
}
}
function startOver(){
    playerPoints = 0;
    computerPoints = 0;
    result.style.backgroundColor = "#E6B8B8";
    result.style.color = "black";
    result.style.display="none";
    computerChoiceEl.style.display = "none";
    playerChoiceEl.style.display = "none";
    computerPointsEl.textContent = "Computer points: " + computerPoints;
    playerPointsEl.textContent = "Player points: " + playerPoints;
}
