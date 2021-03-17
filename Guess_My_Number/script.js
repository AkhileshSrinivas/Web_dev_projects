'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

console.log(document.querySelector('.number').textContent);
document.querySelector('.number').textContent = 20;
console.log(document.querySelector('.number').textContent);

console.log(document.querySelector('.score').textContent);
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.score').textContent);

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  }
});
