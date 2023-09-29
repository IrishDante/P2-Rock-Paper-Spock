//declare constants for DOM elements
const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const opponentScore = document.getElementById("opponent-score");
const gameChoices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
//add event listener to all buttons
for(let button of buttons){
  button.addEventListener("click", function(){
    let playerChoice = this.getAttribute("data-type");
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
