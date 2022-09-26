const playerPointsEl = document.getElementById("playerPoints")
const computerPointsEl = document.getElementById("computerPoints")
const result = document.getElementById("result")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

rock.addEventListener("click", rockChoice);
paper.addEventListener("click", paperChoice);
scissors.addEventListener("click", scissorsChoice);

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
   if(randomNum === 0) {
    return "rock"
   }
   else if(randomNum === 1) {
    return "paper"
   }
   else {
    return "scissors"
   }
}
let computerPoints = 0
let playerPoints = 0
let computerSelection = "";
let playerSelection = "";

function playRound() {
    result.style.display="block";
    computerSelection = getComputerChoice();
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
    console.log("Player:" + playerPoints)
    console.log("Computer:" + computerPoints)
    whoWins()
}   

function whoWins() {
if(playerPoints === 5) {
    result.textContent = "THE PLAYER WON THE GAME!!!";
    playerPoints = 0;
    computerPoints = 0;
    computerPointsEl.textContent = "Computer points: " + computerPoints;
    playerPointsEl.textContent = "Player points: " + playerPoints;
}
else if (computerPoints === 5) {
    result.textContent = "THE COMPUTER WON THE GAME!!!"
    playerPoints = 0;
    computerPoints = 0;
    computerPointsEl.textContent = "Computer points: " + computerPoints;
    playerPointsEl.textContent = "Player points: " + playerPoints;
}
}