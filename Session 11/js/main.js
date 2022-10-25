const milkBtn = document.getElementById("milkBtn");
const eggsBtn = document.getElementById("eggsBtn");
const breadBtn = document.getElementById("breadBtn");
const applesBtn = document.getElementById("applesBtn");
const juiceBtn = document.getElementById("juiceBtn");

let shoppingCart = [];
document.getElementById("shoppingCart").innerHTML = shoppingCart;

function addMilk() {
  shoppingCart.push("Milk");
  document.getElementById("shoppingCart").innerHTML = shoppingCart;
  alert("Milk was added to the cart!");
};

function addBread() {
  shoppingCart.push("Bread");
  document.getElementById("shoppingCart").innerHTML = shoppingCart;
  alert("Bread was added to the cart!");
}

function addEggs() {
  shoppingCart.push("Eggs");
  document.getElementById("shoppingCart").innerHTML = shoppingCart;
  alert("Eggs were added to the cart!");
}

function addApples() {
  shoppingCart.push("Apples");
  document.getElementById("shoppingCart").innerHTML = shoppingCart;
  alert("Apples were added to the cart!");
}

function addJuice() {
  shoppingCart.push("Juice");
  document.getElementById("shoppingCart").innerHTML = shoppingCart;
  alert("Juice was added to the cart!");
}

function checkForMilk() {
  if(shoppingCart.includes("Milk")){
    alert("Milk is already in the cart!")
  }
  else {
    addMilk();
  }
}
function checkForBread() {
  if(shoppingCart.includes("Bread")){
    alert("Bread is already in the cart!")
  }
  else {
    addBread();
  }
}
function checkForEggs() {
  if(shoppingCart.includes("Eggs")){
    alert("Eggs are already in the cart!")
  }
  else {
    addEggs();
  }
}
function checkForApples() {
  if(shoppingCart.includes("Apples")){
    alert("Apples are already in the cart!")
  }
  else {
    addApples();
  }
}
function checkForJuice() {
  if(shoppingCart.includes("Juice")){
    alert("Juice is already in the cart!")
  }
  else {
    addJuice();
  }
}

milkBtn.addEventListener("click", checkForMilk);
eggsBtn.addEventListener("click", checkForEggs);
breadBtn.addEventListener("click", checkForBread);
applesBtn.addEventListener("click", checkForApples);
juiceBtn.addEventListener("click", checkForJuice);
