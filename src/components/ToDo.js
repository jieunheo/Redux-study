import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

const ToDo = ({ text, id, deleteToDo }) => {
  return (
    <li id={id}>
      <Link to={`/${id}`}>
        {text}
      </Link>
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