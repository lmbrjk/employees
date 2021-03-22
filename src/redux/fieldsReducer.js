import {CHANGE_FIELDS_LIST} from "./types"

const initialState = {
    inputs: [
        { typeField: "text", nameField: "name", labelField: "Имя", hidden: true },
        { typeField: "text", nameField: "middlename", labelField: "Отчество", hidden: false },
        { typeField: "text", nameField: "surname", labelField: "Фамилия", hidden: false },
        { typeField: "text", nameField: "birthday", labelField: "Дата рождения", hidden: false },
        { typeField: "text", nameField: "number", labelField: "Табельный номер", hidden: false },
        { typeField: "text", nameField: "post", labelField: "Должность", hidden: true },
        { typeField: "text", nameField: "division", labelField: "Подразделение", hidden: false }
    ],
    hidden: ["id", "post"]
};

export const fieldsReducer = (state = initialState, action) => {
    switch (action.type){
        case CHANGE_FIELDS_LIST:
            return { ...state, fields: state.fields };
        default: return state;
    }
}