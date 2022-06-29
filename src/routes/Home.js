import { Fragment, useState } from "react";

const App = () => {
  const [enteredText, setEnteredText] = useState('');

  const enteredTextHandler = (event) => {
    setEnteredText(event.target.value);
  }
  const addToDoHandler = (event) => {
    event.preventDefault();
    console.log(enteredText);
    setEnteredText('');
  };

  return (
    <Fragment>
      <h1>To Do</h1>
      <form onSubmit={addToDoHandler}>
        <input type='text' value={enteredText} onChange={enteredTextHandler} />
        <button type='submit'>ADD</button>
      </form>
      <ul></ul>
    </Fragment>
  )
};

export default App;