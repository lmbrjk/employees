import { connect } from "react-redux";
import Component from "../components/ChangeItem";

const mapState = (state, ownProps) => {
  const currentUser = state.items.find(
    (item) => item.id === ownProps.match.params.id
  );

  return {
    currentUser,
    inputs: state.inputs,
  };
};

const mapDispatch = (rDispatch, ownProps) => {
  const dispatch = rDispatch;

  return {
    changeItem: (payload) => dispatch.items.changeItem(payload),
  };
};
export default connect(mapState, mapDispatch)(Component);
