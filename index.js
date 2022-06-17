let door1 = document.querySelector("#door1");
let door2 = document.querySelector("#door2");
let door3 = document.querySelector("#door3");

const selection = document.querySelector("#selection");
selection.style.display = "none";
const chosen = document.querySelector("#chosen");
const host = document.querySelector("#host");

const stick = document.querySelector("#stick");
const swap = document.querySelector("#swap");
const outcome = document.querySelector("#outcome");
const stickWins = document.querySelector("#stickWins");
const swapWins = document.querySelector("#swapWins");
const games = document.querySelector("#games");

let playerChoice;
let hostChoice;

door1.addEventListener('click', function() {
  selection.style.display = "block";
  chosen.textContent = "You have chosen Door 1"
  playerChoice = 1;
  hostDoor(playerChoice);
});

door2.addEventListener('click', function() {
  selection.style.display = "block";
  chosen.textContent = "You have chosen Door 2"
  playerChoice = 2;
  hostDoor(playerChoice);
});

door3.addEventListener('click', function() {
  selection.style.display = "block";
  chosen.textContent = "You have chosen Door 3"
  playerChoice = 3;
  hostDoor(playerChoice);
});

// Fisher-Yates shuffle to shuffle the array

let prizes = [1,0,0];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];  
  }
  
  console.log(array);
  door1 = array[0];
  door2 = array[1];
  door3 = array[2];
  return array;
}
shuffle(prizes);

function hostDoor(num) {
  if (door1 === 0 && num !== 1 ) {
    hostChoice = 1;
    host.textContent = "The host has opened Door 1, revealing a goat"
  } else if (door2 === 0 && num !== 2) {
    hostChoice = 2;
    host.textContent = "The host has opened Door 2, revealing a goat"
  } else if (door3 === 0 && num !== 3) {
    hostChoice = 3;
    host.textContent = "The host has opened Door 3, revealing a goat"
  }
}

let winCount = 0;
let gameCount = 0;
// Logic if user decides to stick

stick.addEventListener('click', function (){
  gameCount ++;
  games.textContent = `Number of Games = ${gameCount}`;
  if (playerChoice === 1 && door1 === 0) {
    outcome.textContent = "Sorry you lose!"
  } 
  else if (playerChoice === 2 && door2 === 0) {
    outcome.textContent = "Sorry you lose!"
  }
  else if (playerChoice === 3 && door3 === 0) {
    outcome.textContent = "Sorry you lose!"
  }
  else { 
    outcome.textContent = "Congratulations! You Win!" ;
    winCount++;
  }
    stickWins.textContent = `Number of wins from Sticking ${winCount} out of ${gameCount} games.  That's a ${Math.round(winCount/gameCount * 100)}% chance of winning from swapping`;

  shuffle(prizes);
});

// Logic if user clicks swap button
swap.addEventListener('click', function () {
  gameCount ++;
  games.textContent = `Number of Games = ${gameCount}`;
if (playerChoice === 1 && door1 === 1) {
  outcome.textContent = "Sorry you lose!" 
} else if (playerChoice === 2 && door2 === 1) {
  outcome.textContent = "Sorry you lose!" 
} else if (playerChoice === 3 && door3 === 1) {
  outcome.textContent = "Sorry you lose!" }
  else {
    outcome.textContent = "Congratulations! You Win!" 
    winCount ++;}
    swapWins.textContent = `Number of wins from Swapping ${winCount} out of ${gameCount} games.  That's a ${Math.round(winCount/gameCount * 100)}% chance of winning from swapping`;

  
  shuffle(prizes);
});
