import {CREATE_ITEM, CHANGE_ITEM} from "./types"

const initialState = {
    items: [
        {id: "123451899367450121", name: "Иван", surname: "Иванов", post:"менеджер", number: 333555},
        {id: "123899899364440121", name: "Варвара", surname: "Плющ", post:"экономист", number: 895122},
        {id: "123451899365450100", name: "Семен", surname: "Горбунков", post:"экономист", number: 124899},
        {id: "125961899365450100", name: "Петр", surname: "Петров", post:"кассир", number: 542303}
    ]
};

export const itemsReducer = (state = initialState, action) => {
    switch (action.type){
        case CREATE_ITEM:
            return { ...state, items: state.items.concat([action.payload]) };
        case CHANGE_ITEM:
            return {...state, 
                items: state.items.map(item => item.id === action.payload.id ?
                    {...item, name: action.payload.changes} :
                    item
                )            
            };
        default: return state;
    }
}