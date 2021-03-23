import {CHANGE_FIELDS_LIST} from "./types"

const initialState = {
    inputs: [
        { typeField: "text", nameField: "name", labelField: "Имя", hidden: false },
        { typeField: "text", nameField: "middlename", labelField: "Отчество", hidden: false },
        { typeField: "text", nameField: "surname", labelField: "Фамилия", hidden: false },
        { typeField: "date", nameField: "birthday", labelField: "Дата рождения", hidden: false },
        { typeField: "number", nameField: "number", labelField: "Табельный номер", hidden: false },
        { typeField: "text", nameField: "post", labelField: "Должность", hidden: false },
        { typeField: "text", nameField: "division", labelField: "Подразделение", hidden: false }
    ]
};

export const fieldsReducer = (state = initialState, action) => {
    switch (action.type){
        case CHANGE_FIELDS_LIST:
            return { ...state, fields: state.fields };
        default: return state;
    }
}