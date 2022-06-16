let door1 = document.querySelector("#door1");
let door2 = document.querySelector("#door2");
let door3 = document.querySelector("#door3");

const selection = document.querySelector("#selection");
selection.style.display = "none";
const chosen = document.querySelector("#chosen");

const stick = document.querySelector("#stick");
const swap = document.querySelector("#swap");


door1.addEventListener('click', function() {
  selection.style.display = "block";
  chosen.textContent = "You have chosen Door 1"
});

door2.addEventListener('click', function() {
  selection.style.display = "block";
  chosen.textContent = "You have chosen Door 2"
});

door3.addEventListener('click', function() {
  selection.style.display = "block";
  chosen.textContent = "You have chosen Door 3"
});


stick.addEventListener('click', () => console.log("CLICKED stick"));
swap.addEventListener('click', () => console.log("CLICKED swap"));

// Fisher-Yates shuffle
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

// console.log(door2)

// function loop (num, callback) {
  
//   for (let i = num; i > 0; i--) {
//     let d1 = 0;
//     if (callback[0] > 0) {d1++}
//     console.log(d1);
//   }
// }

// loop(5, shuffle(prizes));
