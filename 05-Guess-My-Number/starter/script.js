'use strict';
/*
console.log(document.querySelector('.label-score').textContent);
document.querySelector('.number').textContent = 17;
document.querySelector('.score').textContent = 17;
document.querySelector('.message').textContent = '✨ Correcto Number 🎉';
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.score').value);
console.log(document.querySelector('.guess').value);
// const paragraphs = document.querySelectorAll('p');
// console.log(paragraphs.length);
// for (let i = 0; i < paragraphs.length; i++) {
//   console.log(paragraphs[i].textContent);
// }
// document.querySelector('.number').textContent = secretNumber;
*/

let secretNumber = Math.trunc(Math.random() * 21);
console.log(secretNumber);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number ✋';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '✨ Correct Number 🎉';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    //When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
// Implement Again botton Challenge
// Select button again class and attach a click event gandler

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 21);
  console.log(secretNumber, `again botton`);
  document.querySelector('.message').textContent =
    'Empieza a tratar de adivinar...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
