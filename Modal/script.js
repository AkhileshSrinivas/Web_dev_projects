'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btncloseModel = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');
console.log(btnsOpenModel);

for (let i = 0; i < btnsOpenModel.length; i++) {
  console.log(btnsOpenModel[i].textContent);
}
