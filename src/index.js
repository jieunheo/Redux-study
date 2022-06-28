import { createStore } from 'redux';

// element
const form  = document.querySelector("form");
const input = document.querySelector("input");
const ul    = document.querySelector("ul");

// 변수
const ADD_TODO    = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// dispatch에 넣을 값 만들기 위한 함수
const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
    id: Date.now()
  }
}
const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id
  }
}

// store reducer
const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [{text: action.text, id: action.id}, ...state];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

// store 만들기 및 reducer 연결
const store = createStore(reducer);
// store가 변하면 호출할 함수
store.subscribe(() => console.log(store.getState()));

// dispatch를 위한 함수
const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
}
const dispatchDeleteToDo = (event) => {
  const id = parseInt(event.target.parentNode.id);
  store.dispatch(deleteToDo(id));
}

// ul에 state값을 이용하여 li 넣어주기
const paintTodos = () => {
  const toDos = store.getState();
  ul.innerHTML = '';
  toDos.forEach(todo => {
    const li = document.createElement('li');
    const btn = document.createElement('button');

    btn.innerText = "del";
    btn.addEventListener("click", dispatchDeleteToDo);

    li.id = todo.id;
    li.innerHTML = todo.text;

    li.appendChild(btn);
    ul.appendChild(li);
  });
}
store.subscribe(paintTodos);

// 전송 시 실행할 함수
const onSubmit = event => {
  event.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};
form.addEventListener("submit", onSubmit);