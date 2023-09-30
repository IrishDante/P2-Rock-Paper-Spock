//declare constants for DOM elements
let buttons = document.getElementsByClassName("control");
let playerScore = document.getElementById("player-score");
let opponentScore = document.getElementById("opponent-score");
let roundResult = document.getElementById("round-result");
let playerImage = document.getElementById("player-image");
let opponentImage = document.getElementById("opponent-image");
const gameChoices = [{name:"Rock", beats: ["Scissors","Lizard"], image:"assets/images/rock.jpg"}, {name:"Paper", beats:["Rock","Spock"],image:"assets/images/paper.jpg"}, 
                     {name:"Scissors", beats:["Paper","Lizard"],image:"assets/images/scissors.jpg"}, {name:"Lizard", beats:["Spock","Paper"],image:"assets/images/lizard.jpg"},
                     {name:"Spock", beats:["Scissors","Rock"], image:"assets/images/spock.jpg"}];
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

  updateImages(playerChoice, opponentChoice);
  if (playerChoice == opponentChoice){
    roundResult.innerHTML = `You and your opponent both choose ${playerChoice}, as such this round is a draw.`;
  }else if (playerWins(playerChoice, opponentChoice)){
    roundResult.innerHTML = `You choose ${playerChoice}, and your opponent choose ${opponentChoice} as such you win!`;
    playerScore.innerHTML = ++playerWinCount;
  }else{
    roundResult.innerHTML = `You choose ${playerChoice}, and your opponent choose ${opponentChoice} as such you lose!`;
    opponentScore.innerHTML = ++opponentWinCount;
  }
}

function updateImages(playerChoice, opponentChoice){
  let playerIcon = gameChoices.find(({name})=> name === playerChoice);
  playerImage.src = playerIcon.image;
  let opponentIcon = gameChoices.find(({name})=> name === opponentChoice);
  opponentImage.src = opponentIcon.image;
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
