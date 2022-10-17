import { connect } from "react-redux";
import Component from "../components/NewItem";

const mapState = (state, ownProps) => {
  return {
    inputs: state.inputs,
  };
};

const mapDispatch = (rDispatch, ownProps) => {
  const dispatch = rDispatch;

  return {
    createItem: (payload) => dispatch.items.createItem(payload),
  };
};
export default connect(mapState, mapDispatch)(Component);
