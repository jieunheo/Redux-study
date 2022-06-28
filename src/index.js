const plus   = document.getElementById('plus');
const minus  = document.getElementById('minus');
const number = document.querySelector('span');

let count = 0;
number.innerText = count;
const updateText = () => {
  number.innerText = count;
}

const plusHandler = () => {
  count = count + 1;
  updateText();
};
const minusHandler = () => {
  count = count - 1;
  updateText();
};

plus.addEventListener("click", plusHandler);
minus.addEventListener("click", minusHandler);
