"use stric";

// ELEMENTS SELECTED
const player0 = document.querySelector(".player1");
const player1 = document.querySelector(".player2");
const score0 = document.querySelector("#score--1");
const score1 = document.querySelector("#score--2");
const current0 = document.querySelector("#current--score1");
const current1 = document.querySelector("#current--score2");
const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// SCORES

let playerScores = [0, 0];
let currentPlayer = 0;
let currentScore = 0;

// DEFAULT SCREEN

score0.textContent = 0;
score1.textContent = 0;
current0.textContent = 0;
current1.textContent = 0;
dice.classList.add("hidden");

// DICE ROLL

btnRoll.addEventListener("click", function () {
  //Random dice roll
  let diceRoll = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${diceRoll}.png`;
  dice.classList.remove("hidden");
});
