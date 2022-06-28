import { createStore } from 'redux';

const form  = document.querySelector("form");
const input = document.querySelector("input");
const ul    = document.querySelector("ul");

const ADD_TODO    = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {

  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [{text: action.text, id: action.id}, ...state];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

const paintTodos = () => {
  const toDos = store.getState();
  ul.innerHTML = '';
  toDos.forEach(todo => {
    const li = document.createElement('li');
    li.id = todo.id;
    li.innerHTML = todo.text;
    ul.appendChild(li);
  });
}
store.subscribe(paintTodos);

const addToDo = (text) => {
  store.dispatch({ type: ADD_TODO, text, id: Date.now() });
}

const onSubmit = event => {
  event.preventDefault();
  const toDo = input.value;
  input.value = "";
  addToDo(toDo);
};
form.addEventListener("submit", onSubmit);
