//the section for the dice and info//
let diceOne;
let diceTwo;
let diceThree;
let dicefour;

let dice3IsTrown = false;
let dice4IsTrown = false;

let playerCredits;
let computerCredits;
let playerWins = false;
let computerWins = false;
let nextRound = false;
let playerName;
let lastName;
let lastGottenScore = false;
let scorechange;
let leaderName;

//instructions//
function ShowRules(){
alert("Dezelfde regels als de normale modus maar nu met een paar veranderingen.")
alert("Het doel vor deze modus is zo lang mogelijk blijven doorgaan.")
alert("In deze modus moet je inplaats van tot de 10 credits gaan blijven doorgaan totdat de computer 2 credits heeft.")
alert("In deze modus kan je ook een naam zetten om je totale scoren bij te houden.")
alert("Hierdoor kan je scoren bij gehouden worden en kan je proberen de scoren van anderen te verbeteren.")
}
//dice//

function TrowDiceOne() {
  let x = Math.floor(Math.random() * 6 + 1);
  document.getElementById("button1").textContent = x;
  console.log(x);
  diceOne = x;
}
function TrowDiceTwo() {
  let y = Math.floor(Math.random() * 6 + 1);
  document.getElementById("button2").textContent = y;
  console.log(y);
  diceTwo = y;
}
function TrowDiceThree() {
  let z = Math.floor(Math.random() * 6 + 1);
  //document.getElementById("button3").textContent = z;//
  //console.log(z);//
  diceThree = z;
  dice3IsTrown = true;
}
function TrowDiceVoor() {
  let b = Math.floor(Math.random() * 6 + 1);
  //document.getElementById("button4").textContent = b;//
  // console.log(b);//
  dicefour = b;
  dice4IsTrown = true;
}

function ThrowYourDice() {
  let z = Math.floor(Math.random() * 6 + 1);
  diceThree = z;
  dice3IsTrown = true;
  let b = Math.floor(Math.random() * 6 + 1);
  dicefour = b;
  dice4IsTrown = true;
}
//section to start game//

function GameStarts() {
  let x = Math.floor(Math.random() * 6 + 1);
  document.getElementById("button1").textContent = x;
  console.log(x);
  diceOne = x;
  let y = Math.floor(Math.random() * 6 + 1);
  document.getElementById("button2").textContent = y;
  console.log(y);
  diceTwo = y;
  computerCredits = 0;
  playerCredits = 0;
}
//section to keep the round going//
function Rollagain() {
  {
    let z = Math.floor(Math.random() * 6 + 1);
    diceThree = z;
    dice3IsTrown = true;
  }
  {
    let b = Math.floor(Math.random() * 6 + 1);
    dicefour = b;
    dice4IsTrown = true;
  }
  {
    let x = Math.floor(Math.random() * 6 + 1);
    document.getElementById("button1").textContent = x;
    console.log(x);
    diceOne = x;
  }
  {
    let y = Math.floor(Math.random() * 6 + 1);
    document.getElementById("button2").textContent = y;
    console.log(y);
    diceTwo = y;
  }
}
//section for finding out who won//

function UserChoseHigher() {
  console.log("Gebruiker koos hoger");

  if (!dice3IsTrown || !dice4IsTrown) {
    alert("Gooi eerst dobbelstenen");
    return;
  }

  if (diceOne + diceTwo < diceThree + dicefour) {
    document.getElementById("Winner").innerHTML = "player wins";
    setPlayerCredits(playerCredits + 1);
  }
  if (diceOne + diceTwo > diceThree + dicefour) {
    document.getElementById("Winner").innerHTML = "computer wins";
    setComputerCredits(computerCredits + 1);
    if (computerCredits == 2) {
      alert("You have lost");
      setPlayerCredits(0);
      setComputerCredits(0);
    }
  }

  dice3IsTrown = false;
  dice4IsTrown = false;
}

function UserChoseLower() {
  console.log("Gebruiker koos lager");

  if (!dice3IsTrown || !dice4IsTrown) {
    alert("Gooi eerst dobbelstenen");
    return;
  }

  if (diceOne + diceTwo > diceThree + dicefour) {
    document.getElementById("Winner").innerHTML = "player wins";
    setPlayerCredits(playerCredits + 1);
  }
  if (diceOne + diceTwo < diceThree + dicefour) {
    document.getElementById("Winner").innerHTML = "computer wins";
    setComputerCredits(computerCredits + 1);

    if (computerCredits == 2) {
      alert("You have lost");
      setPlayerCredits(0);
      setComputerCredits(0);
    }
  }

  

  dice3IsTrown = false;
  dice4IsTrown = false;
}

//section for next round after win//

if (computerCredits == 2) {
  nextRound = true;
}

if ((nextRound = true)) {
  computerCredits = 0;
  playerCredits = 0;
  nextRound = false;
}

//section for points//

function setPlayerCredits(newCredits) {
  playerCredits = newCredits;
  document.getElementById("player-score").innerHTML = playerCredits;
  document.querySelector("#High-Score").textContent = playerCredits;

}

function setComputerCredits(newCredits) {
  computerCredits = newCredits;
  document.getElementById("computer-score").innerHTML = computerCredits;
}

// section for scoreboard//
function ChangeName() {
  let playerName = prompt("Please enter your name", "Name");
  document.getElementById("Player-Name").innerHTML = playerName;
}

document.getElementById("High-Score").innerHTML = playerCredits;

let lScore = playerCredits

if (computerCredits == 2);
  let scoreChange = 1;
  


  if (scoreChange = 1)
    leaderName = playerName;

document.getElementById("Last-Player-Name").innerHTML = lScore;
document.getElementById("Lastscore").innerHTML = leaderName;

//vraag sectie:
//wanneer computercredits 2 is will ik dat het huidige playercredits fast wordt gelegt in een ander variable
//zodat ik het kan laten zien in de 'last high score' stukje
//ook wil ik dat het 'last high score' pas aangepast wordt wanneer de playercredits in 'scoreboard' hoger zijn dan het eerst vast gelegde playercredits in 'last high score'
//


 //let Score = playerCredits;
  //lastGottenScore = true;

  //if (lastGottenScore = true);
  // let lScore = playerCredits
  // lastGottenScore = false;