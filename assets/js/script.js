//declare constants for DOM elements
let buttons = document.getElementsByClassName("control");
let playerScore = document.getElementById("player-score");
let opponentScore = document.getElementById("opponent-score");
const gameChoices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

//add event listener to all buttons
for (let button of buttons){
  button.addEventListener("click", function(){
    console.log("button has been pressed")
    let playerChoice = this.textContent;
    playGame(playerChoice);
  })
}

function playGame(playerChoice){
  
  let opponentChoice = gameChoices[Math.floor(Math.random()*5)];

  if (playerChoice == opponentChoice){
    document.getElementById("roundResult").innerHTML = `You and your opponent both choose ${playerChoice}, as such this round is a draw.`;
  }else{
    document.getElementById("roundResult").innerHTML = `You choose ${playerChoice}, as opponent choose ${opponentChoice}`;
  }
}
