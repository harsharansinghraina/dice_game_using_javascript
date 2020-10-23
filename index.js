
var randomNumber1 = Math.floor(Math.random()*6+1);
var randomNumber2 = Math.floor(Math.random()*6+1);

randomDice1 = "images/dice" + randomNumber1 + ".png";

randomDice2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").getAttribute("src");

document.querySelector(".img1").setAttribute("src", randomDice1);

document.querySelector(".img2").getAttribute("src");

document.querySelector(".img2").setAttribute("src", randomDice2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText= "🚩Player 1 wins";
}

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerText="Draw!";
}

if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerText="Player 2 wins🚩";
}
