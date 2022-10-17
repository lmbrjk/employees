import { connect } from "react-redux";
import Component from "../components/List";

const mapState = (state, ownProps) => {
  return {
    items: state.items,
    inputs: state.inputs,
  };
};

const mapDispatch = (rDispatch, ownProps) => {
  const dispatch = rDispatch;
  return {};
};
export default connect(mapState, mapDispatch)(Component);
