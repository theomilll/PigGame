'use strict';

// Functions
const btnRollFunc = function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    // Add dice to the current score
    currentScore0 += dice;
    current0El.textContent = currentScore0;
  } else {
    //Switch to next player
  }
};

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('btn--hold');

let currentScore0 = 0;
let currentScore1 = 0;
let activePlayer = 0;
const scores = [];

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Rolling dice functionality

btnRoll.addEventListener('click', btnRollFunc);
