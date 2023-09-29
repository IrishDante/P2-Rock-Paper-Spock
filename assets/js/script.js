/*declare constants for DOM elements*/
const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const opponentScore = document.getElementById("opponent-score");

/*add event listener to all buttons*/
for(let button of buttons){
  button.addEventListener("click", function(){
    let playerChoice = this.getAttribute("data-type")'
    playGame(playerChoice);
}

/*this function compares the player choice and the computer choice to see who wins and updates the scores accordingly*/
function playGame(playerChoice){
  
}
