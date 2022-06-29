import { Fragment, useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

const Home = ({ toDos, addToDo }) => {
  const [enteredText, setEnteredText] = useState('');

  const enteredTextHandler = (event) => {
    setEnteredText(event.target.value);
  }
  const addToDoHandler = (event) => {
    event.preventDefault();
    console.log(enteredText);
    addToDo(enteredText);
    setEnteredText('');
  };

  return (
    <Fragment>
      <h1>To Do</h1>
      <form onSubmit={addToDoHandler}>
        <input type='text' value={enteredText} onChange={enteredTextHandler} />
        <button type='submit'>ADD</button>
      </form>
      <ul>
        {JSON.stringify(toDos)}
      </ul>
    </Fragment>
  )
};

function mapStateToProps(state, ownProps) {
  return {
    toDos: state
  };
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addToDo: text => dispatch(actionCreators.addToDo(text))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);