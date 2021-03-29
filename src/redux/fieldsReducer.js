import {CHANGE_FIELDS_LIST} from "./types"

const initialState = {
    inputs: [
        { typeField: "text", nameField: "name", labelField: "Имя", hidden: false },
        { typeField: "text", nameField: "middlename", labelField: "Отчество", hidden: true },
        { typeField: "text", nameField: "surname", labelField: "Фамилия", hidden: false },
        { typeField: "date", nameField: "birthday", labelField: "Дата рождения", hidden: false },
        { typeField: "number", nameField: "number", labelField: "Табельный номер", hidden: false },
        { typeField: "select", nameField: "post", labelField: "Должность", labels: ["менеджер", "кассир", "экономист", "начальник отдела"], hidden: false },
        { typeField: "select", nameField: "division", labelField: "Подразделение", labels: ["кассовых операций", "кредитный отдел", "по работе с юрлицами"], hidden: false }
    ],
    // allFields: [
    //     // поле ID удалено, т.к. оно только для внутреннего поиска
    //     { name: "name", label:"Имя", hidden: false },
    //     { name: "middlename", label:"Отчество", hidden: true },
    //     { name: "surname", label:"Фамилия", hidden: false },
    //     { name: "birthday", label:"Дата рождения", hidden: false },
    //     { name: "number", label:"Табельный номер", hidden: false },
    //     { name: "post", label:"Должность", hidden: false },
    //     { name: "division", label:"Подразделение", hidden: true }
    // ]
};

export const fieldsReducer = (state = initialState, action) => {
    switch (action.type){
        case CHANGE_FIELDS_LIST:
            const stateCopy = {...state};

            console.log(action.payload)

            stateCopy.inputs.map( field => 
                action.payload.fields.includes(field.nameField)
                ? field.hidden = true
                : field.hidden = false
            ) 
            return stateCopy;
        default: return state;
    }
}