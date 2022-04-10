'use strict';

let winningNumber = Math.floor(Math.random() * 20) + 1;
let number = document.querySelector('.number');
let numInput = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const message = document.querySelector('.message');
const scoreNum = document.querySelector('.score');
let score = 20;
let highScore;
const highScoreNum = document.querySelector('.highscore');

checkBtn.addEventListener('click', function () {
  if (numInput.value === '') {
    message.textContent = 'Insert number...';
  } else if (numInput.value == winningNumber) {
    message.textContent = 'Correct number!👍🏼🔥';
    number.textContent = winningNumber;
    document.body.style.backgroundColor = 'green';
    highScoreNum.textContent = score;
  } else if (numInput.value < winningNumber) {
    if (score > 1) {
      message.textContent = 'Too low';
      score--;
      scoreNum.textContent = score;
      document.body.style.backgroundColor = '#222';
    } else {
      message.textContent = 'You lose!';
      scoreNum.textContent = 0;
    }
  } else {
    if (score > 1) {
      message.textContent = 'Too high';
      score--;
      scoreNum.textContent = score;
      document.body.style.backgroundColor = '#222';
    } else {
      message.textContent = 'You lose!';
      scoreNum.textContent = 0;
    }
  }
});

againBtn.addEventListener('click', function () {
  number.textContent = '?';
  winningNumber = Math.floor(Math.random() * 20) + 1;
  document.body.style.backgroundColor = '#222';
  numInput.value = '';
});
