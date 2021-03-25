import {CHANGE_FIELDS_LIST} from "./types"

const initialState = {
    inputs: [
        { typeField: "text", nameField: "name", labelField: "Имя", hidden: false },
        { typeField: "text", nameField: "middlename", labelField: "Отчество", hidden: false },
        { typeField: "text", nameField: "surname", labelField: "Фамилия", hidden: false },
        { typeField: "date", nameField: "birthday", labelField: "Дата рождения", hidden: false },
        { typeField: "number", nameField: "number", labelField: "Табельный номер", hidden: false },
        { typeField: "select", nameField: "post", labelField: "Должность", labels: ["менеджер", "кассир", "экономист", "начальник отдела"], hidden: false },
        { typeField: "select", nameField: "division", labelField: "Подразделение", labels: ["кассовых операций", "кредитный отдел", "по работе с юрлицами"], hidden: false }
    ]
};

export const fieldsReducer = (state = initialState, action) => {
    switch (action.type){
        case CHANGE_FIELDS_LIST:
            return { ...state, fields: state.fields };
        default: return state;
    }
}