"use stric";

// ELEMENTS SELECTED
const player0 = document.querySelector(".player1");
const player1 = document.querySelector(".player2");
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");
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
  currentScore += diceRoll;
  document.querySelector(`#current--${currentPlayer}`).textContent =
    currentScore;

  if (diceRoll === 1) {
    currentScore = 0;
    document.querySelector(`#current--${currentPlayer}`).textContent =
      currentScore;
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    player0.classList.toggle(`player--active`);
    player1.classList.toggle(`player--active`);
  } else {
    document.querySelector(`#current--${currentPlayer}`).textContent =
      currentScore;
  }
});
