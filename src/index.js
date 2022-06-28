import { createStore } from 'redux';

const plus   = document.getElementById('plus');
const minus  = document.getElementById('minus');
const number = document.querySelector('span');

const PLUS  = "PLUS";
const MINUS = "MINUS";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case PLUS:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
};
const store = createStore(reducer);

const onChange = () => {
  console.log("change");
  number.innerText = store.getState();
};
store.subscribe(onChange);

const plusHandler = () => {
  store.dispatch({type: PLUS});
}
const minusHandler = () => {
  store.dispatch({type: MINUS});
}

plus.addEventListener("click", plusHandler);
minus.addEventListener("click", minusHandler);
