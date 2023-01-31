'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore0 = 0;
let activePlayer = 0;
let playing = true;
const scores = [0, 0];

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? (activePlayer = 1) : 0;
  currentScore0 = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Functions
const btnRollFunc = function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      // Add dice to the current score
      currentScore0 += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore0;
    } else {
      //Switch to next player
      switchPlayer();
    }
  }
};

const btnHoldFunc = function () {
  if (playing) {
    scores[activePlayer] += currentScore0;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
};

const newGameFunc = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  scores[0] -= scores[0];
  scores[1] -= scores[1];
  current0El.textContent = 0;
  current1El.textContent = 0;
  currentScore0 = 0;
  activePlayer = 0;
  playing = true;

  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--0`).classList.remove('player--winner');

  document.querySelector(`.player--1`).classList.remove('player--active');
  document.querySelector(`.player--1`).classList.remove('player--winner');
};

// Rolling dice functionality

btnRoll.addEventListener('click', btnRollFunc);
btnHold.addEventListener('click', btnHoldFunc);
btnNew.addEventListener('click', newGameFunc);
