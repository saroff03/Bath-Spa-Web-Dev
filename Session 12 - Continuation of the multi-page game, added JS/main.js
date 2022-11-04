const btn1 = document.getElementById("btn1");
const p1 = document.getElementById("p1");
const btn2 = document.getElementById("btn2");
const p2 = document.getElementById("p2");
const btn3 = document.getElementById("btn3");
const p3 = document.getElementById("p3");


function getChoice() {
  return Math.floor(Math.random() * 3);
};

function makeChoice1() {
  if(getChoice() < 2){
    p1.innerHTML = "Computer says: Reach for flashlight and dive deeper..."
  }
  else {
    p1.innerHTML = "Computer say: Go back!"
  }
};

function makeChoice2() {
  if(getChoice() < 2){
    p2.innerHTML = "Computer says: Who is there?"
  }
  else {
    p2.innerHTML = "Computer say: Run all the way back to the entrance!"
  }
};

function makeChoice3() {
  if(getChoice() < 2){
    p3.innerHTML = "Computer says: Shoot him in the foot!"
  }
  else {
    p3.innerHTML = "Computer say: Cast a spell!"
  }
};
