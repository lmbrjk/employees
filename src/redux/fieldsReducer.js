import {CHANGE_FIELDS_LIST, SWITCH_SIDEBAR} from "./types"

const initialState = {
    inputs: [
        { typeField: "text", nameField: "name", labelField: "Имя", hidden: true },
        { typeField: "text", nameField: "middlename", labelField: "Отчество", hidden: true },
        { typeField: "text", nameField: "surname", labelField: "Фамилия", hidden: false },
        { typeField: "date", nameField: "birthday", labelField: "Дата рождения", hidden: true },
        { typeField: "number", nameField: "number", labelField: "Табельный номер", hidden: false },
        { typeField: "select", nameField: "post", labelField: "Должность", labels: ["менеджер", "кассир", "экономист", "начальник отдела"], hidden: true },
        { typeField: "select", nameField: "division", labelField: "Подразделение", labels: ["кассовых операций", "кредитный отдел", "по работе с юрлицами"], hidden: true }
    ],
    sidebarShow: false
};

export const fieldsReducer = (state = initialState, action) => {
    switch (action.type){
        case CHANGE_FIELDS_LIST:
            const stateCopy = {...state};

            stateCopy.inputs.map( field => 
                action.payload.fields.includes(field.nameField)
                ? field.hidden = true
                : field.hidden = false
            ) 
            return stateCopy;
        case SWITCH_SIDEBAR:        
            return {
                ...state, sidebarShow: state.sidebarShow
            };
        default: return state;
    }
}