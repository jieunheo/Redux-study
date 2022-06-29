import { connect } from "react-redux";
import { actionCreators } from "../store";

const ToDo = ({ text, id, deleteToDo }) => {
  return (
    <li id={id}>
      {text}
      <button onClick={deleteToDo}>DEL</button>
    </li>
  )
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteToDo: () => dispatch(actionCreators.deleteToDo(ownProps.id))
  }
};

export default connect(null, mapDispatchToProps)(ToDo);