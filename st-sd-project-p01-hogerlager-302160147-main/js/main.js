
//the section for the dice and info//
let diceOne;
let diceTwo;
let diceThree;
let dicefour;

let dice3IsTrown = false;
let dice4IsTrown = false;
let gameStart = false;
let playerCredits;
let computerCredits;
let playerWins = false;
let computerWins = false;
let nextRound = false;
let startMusic = true;
let stopMusic = true;
let hogerSelected = false;
let lagerSelected = false;

//music//
let myMusic = document.querySelector("#myAudio");

  function playAudio() {
      myMusic.play();
  }
  
  function pauseAudio() {
      myMusic.pause();
  }

//instructions//
alert("Neem eerst even de tijd om op 'hoe werkt dit?' te klikken om te weten hoe dit werkt en wat de spel regels zijn.")
function ShowRules() {
    alert("Om de spel te spelen moet er eerst op de Go knop gedrukt worden.")
    alert("Daarna moet er op de dobbelstenen 3 and 4 geklikt worden.")
    alert("Wanneer dit gedaan is moet je raden of de gegooide cijfers van dobbelsteen 3 en 4 hoger of lager zijn dan de gegooide cijfers van dobbelsteen 1 en 2.")
    alert("Wanneer er iets gezoken is kan je op GOOI WEER drukken om alle dobbelstenen weer te gooien om opnieuw te kiezen.")
    alert("Dit blijft doorgaan totdat de computer of speler 10 credits heeft waardoor die de winner is en de spel zichzelf reset")
    alert("Ook nog, als u de grote van het scherm wilt verkleinen kan u doorgaan totdat de text van kleur verandert")
}

//dice//
function TrowDiceOne() {
    let x = Math.floor((Math.random() * 6) + 1);
    document.getElementById("button1").textContent = x;
    console.log(x);
    diceOne = x;
}

function TrowDiceTwo() {
    let y = Math.floor((Math.random() * 6) + 1);
    document.getElementById("button2").textContent = y;
    console.log(y);
    diceTwo = y;
}

function TrowDiceThree() {
    if (!gameStart) {
        alert("Click eerst op GO");
        return;
    }
    let z = Math.floor((Math.random() * 6) + 1);
    diceThree = z;
    dice3IsTrown = true;
}

function TrowDicefour() {
    if (!gameStart) {
        alert("Click eerst op GO");
        return;
    }
    let b = Math.floor((Math.random() * 6) + 1);
    dicefour = b;
    dice4IsTrown = true;
}

//section to start game//

function GameStarts() {
    let x = Math.floor((Math.random() * 6) + 1);
    document.getElementById("button1").textContent = x;
    console.log(x);
    diceOne = x;
    let y = Math.floor((Math.random() * 6) + 1);
    document.getElementById("button2").textContent = y;
    console.log(y);
    diceTwo = y;
    gameStart = true;
    computerCredits = 0;
    playerCredits = 0;
    playAudio()
}
//section to keep the round going//
function Rollagain() {
    if (!gameStart) {
        alert("Click eerst op GO");
        return;
    }
    if (!hogerSelected || !lagerSelected) {
        alert("kies eerst hoger of lager")
        return;
    }

    TrowDiceOne()
    TrowDiceTwo()
    TrowDiceThree()
    TrowDicefour()
    hogerSelected = false;
    lagerSelected = false;
}
//section for finding out who won//

function UserChoseHigher() {
    console.log("Gebruiker koos hoger");
    if (!gameStart) {
        alert("Click eerst op GO");
        return;
    }
    if (!dice3IsTrown || !dice4IsTrown) {
        alert("Gooi eerst dobbelstenen 3 en 4");
        return;
    }
    if (diceOne + diceTwo < diceThree + dicefour) {
        document.getElementById("Winner").innerHTML = "player wins";
        setPlayerCredits(playerCredits + 1);
        if (playerCredits == 10) {
            alert("The Player has won")
            setPlayerCredits(0);
            setComputerCredits(0);
            gameStart = false;
        }
    }
    if (diceOne + diceTwo > diceThree + dicefour) {
        document.getElementById("Winner").innerHTML = "computer wins";
        setComputerCredits(computerCredits + 1);
        if (computerCredits == 10) {
            alert("The computer has won")
            setPlayerCredits(0);
            setComputerCredits(0);
            gameStart = false;
        }
    }
    if (diceOne + diceTwo == diceThree + dicefour) {
         alert("Het is gelijk")
        }

        dice3IsTrown = false;
        dice4IsTrown = false;
        hogerSelected = true;
        lagerSelected = true;
    }

function UserChoseLower() {
    console.log("Gebruiker koos lager");
    if (!gameStart) {
        alert("Click eerst op GO");
        return;
    }
    if (!dice3IsTrown || !dice4IsTrown) {
        alert("Gooi eerst dobbelstenen 3 en 4");
        return;
    }
    if (diceOne + diceTwo > diceThree + dicefour) {
        document.getElementById("Winner").innerHTML = "player wins";
        setPlayerCredits(playerCredits + 1);
        if (playerCredits == 10) {
            alert("The Player has won")
            setPlayerCredits(0);
            setComputerCredits(0);
            gameStart = false;
        }
    }
    if (diceOne + diceTwo < diceThree + dicefour) {
        document.getElementById("Winner").innerHTML = "computer wins";
        setComputerCredits(computerCredits + 1);
        if (computerCredits == 10) {
            alert("The computer has won")
            setPlayerCredits(0);
            setComputerCredits(0);
            gameStart = false;
        }
    }
    if (diceOne + diceTwo == diceThree + dicefour) {
         alert("Het is gelijk")
        }
        dice3IsTrown = false;
        dice4IsTrown = false;
        lagerSelected = true;
        hogerSelected = true;
    }

//section for points//

function setPlayerCredits(newCredits) {
    playerCredits = newCredits;
    document.getElementById("player-score").innerHTML = playerCredits;

  }

  function setComputerCredits(newCredits) {
    computerCredits = newCredits;
    document.getElementById("computer-score").innerHTML = computerCredits;
  }