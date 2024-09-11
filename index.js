"use stric";

// ELEMENTS SELECTED
const player0 = document.querySelector(".player0");
const player1 = document.querySelector(".player1");
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");
const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// SCORES

let playing = true;
let playerScores = [0, 0];
let currentPlayer = 0;
let currentScore = 0;

const switchPlayer = function () {
  currentScore = 0;
  document.querySelector(`#current--${currentPlayer}`).textContent =
    currentScore;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0.classList.toggle(`player--active`);
  player1.classList.toggle(`player--active`);
};

// DEFAULT SCREEN

score0.textContent = 0;
score1.textContent = 0;
current0.textContent = 0;
current1.textContent = 0;
dice.classList.add("hidden");

//DICE ROLL

btnRoll.addEventListener("click", function () {
  if (playing) {
    //Random dice roll
    let diceRoll = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${diceRoll}.png`;
    dice.classList.remove("hidden");
    currentScore += diceRoll;
    document.querySelector(`#current--${currentPlayer}`).textContent =
      currentScore;

    //If dice roll is 1
    if (diceRoll === 1) {
      switchPlayer();
    } else {
      //If dice roll is not 1
      document.querySelector(`#current--${currentPlayer}`).textContent =
        currentScore;
    }
  }
});

//HOLD
btnHold.addEventListener("click", function () {
  if (playing) {
    playerScores[currentPlayer] += currentScore;
    console.log(playerScores[currentPlayer]);
    document.querySelector(`#score--${currentPlayer}`).textContent =
      playerScores[currentPlayer];

    if (playerScores[currentPlayer] >= 100) {
      playing = false;

      document
        .querySelector(`.player${currentPlayer}`)
        .classList.add("player--winner");
    }
    //SWITCH PLAYER SWITCH SCORE
    currentScore = 0;
    document.querySelector(`#current--${currentPlayer}`).textContent =
      currentScore;
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    player0.classList.toggle(`player--active`);
    player1.classList.toggle(`player--active`);
  }
});

//NEW GAME
btnNew.addEventListener("click", function () {
  playing = true;
  playerScores = [0, 0];
  currentPlayer = 0;
  currentScore = 0;
  player0.classList.add("player--active");
  dice.classList.add("hidden");
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player1.classList.remove("player--active");
});
