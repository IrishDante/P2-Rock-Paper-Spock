//declare constants for DOM elements
let buttons = document.getElementsByClassName("control");
let playerScore = document.getElementById("player-score");
let opponentScore = document.getElementById("opponent-score");
const gameChoices = [{name:"Rock", beats: ["Scissors","Lizard"]}, {name:"Paper", beats:["Rock","Spock"]}, 
                     {name:"Scissors", beats:["Paper","Lizard"]}, {name:"Lizard", beats:["Spock","Paper"]},
                     {name:"Spock", beats:["Scissors","Rock"]}];
let playerWinCount = 0;
let opponentWinCount = 0;

//check that dom has loaded source https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    playerScore.innerHTML = playerWinCount;
    opponentScore.innerHTML = opponentWinCount;
    console.log(buttons);
    for (let button of buttons){
        console.log("button event listener added");
        button.addEventListener("click", function(){
        console.log("button has been pressed");
        let playerChoice = this.textContent;
        playGame(playerChoice);
      })
    }
});
//add event listener to all buttons

function playGame(playerChoice){
  
  let opponentChoice = gameChoices[Math.floor(Math.random()*5)].name;
  console.log(opponentChoice);

  if (playerChoice == opponentChoice){
    document.getElementById("roundResult").innerHTML = `You and your opponent both choose ${playerChoice}, as such this round is a draw.`;
  }else if (playerWins(playerChoice, opponentChoice)){
    document.getElementById("roundResult").innerHTML = `You choose ${playerChoice}, and your opponent choose ${opponentChoice} as such you win!`;
    playerScore.innerHTML = playerWinCount++;
  }else{
    document.getElementById("roundResult").innerHTML = `You choose ${playerChoice}, and your opponent choose ${opponentChoice} as such you lose!`;
    opponentScore.innerHTML = opponentWinCount++;
  }
}

function playerWins(playerChoice, opponentChoice){
  let choiceMatchUps = gameChoices.find(({ name }) => name === playerChoice);
  //console.log(choiceMatchUps);
  let wins = choiceMatchUps.beats;
  //console.log(wins);
  for(let win of wins){
    if(opponentChoice == win){
      return true;
    }
  }
  return false;
}
