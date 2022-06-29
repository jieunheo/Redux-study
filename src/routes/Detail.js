import { connect } from "react-redux";

const Detail = ({toDo}) => {
  return (
    <div>
      <h1>{toDo?.text}</h1>
      <p>create at: {Date(toDo?.id)}</p>
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  const {match: {params: {id}}} = ownProps;
  console.log(id);
  return {
    toDo: state.find(todo => todo.id === parseInt(id))
  };
};

export default connect(mapStateToProps)(Detail);