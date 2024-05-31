'use strict';
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// // Sets the value of the input field
// document.querySelector('.guess').value = 23;
// // Gets the value from input field
// console.log(document.querySelector('.guess').value);

// Score variable
let score = 20;
let highscore = 0;

// Math.trunc removes all the numbers behind the decimal point and Math.random generates
// a different number each time between 0 and 1
// (*20) + 1 makes it so the number will always be between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Event handler - the function that will be executed once certain event happens
// Gets the value after the button is clicked
// This event handler will only get executed once the event happens
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
    //Player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high!' : 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = "You've lost the game!";
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
