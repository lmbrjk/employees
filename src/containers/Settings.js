import { connect } from "react-redux";
import Component from "../components/Settings";

const mapState = (state, ownProps) => {
  /* чтобы при загрузке страницы напротив скрытых полей стояла галка */
  // находим все поля со свойством hidden = true
  const hiddenFields = state.inputs.filter((field) => field.hidden === true);
  // initialValues будут передаваться в Форму как изначальные значения
  const initialValues = [...hiddenFields.map((field) => field.nameField)];
  /* !/ чтобы при загрузке страницы напротив скрытых полей стояла галка */

  return {
    inputs: state.inputs,
    initialValues: initialValues,
  };
};

const mapDispatch = (rDispatch, ownProps) => {
  const dispatch = rDispatch;

  return {
    changeFieldsList: (payload) => dispatch.inputs.changeFieldsList(payload),
  };
};
export default connect(mapState, mapDispatch)(Component);
