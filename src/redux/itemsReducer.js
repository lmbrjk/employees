import {CREATE_ITEM, CHANGE_ITEM} from "./types"

const initialState = {
    items: [
        {id: "123451899367450121", name: "Иван", middlename:"Иванович", surname: "Иванов", birthday: "1988-03-09", number: 333555, post:"менеджер", division: "корпоративный отдел"},
        {id: "123899899364440121", name: "Варвара", middlename:"Сергеевна", surname: "Плющ", birthday: "1963-06-18", number: 895122, post:"экономист", division: "финансового анализа"},
        {id: "123451899365450100", name: "Семен", middlename:"Семенович", surname: "Горбунков", birthday: "1977-11-21", number: 124899, post:"экономист", division: "финансового анализа"},
        {id: "125961899365450100", name: "Петр", middlename:"Петрович", surname: "Петров", birthday: "1995-08-02", number: 542303, post:"кассир", division: "кассовых операций"}
    ]
};

export const itemsReducer = (state = initialState, action) => {
    switch (action.type){
        case CREATE_ITEM:
            return { ...state, items: state.items.concat([action.payload]) };
        case CHANGE_ITEM:
            return {...state, 
                items: state.items.map(item => item.id === action.payload.id 
                ? action.payload
                : item)                 
            };
        default: return state;
    }
}