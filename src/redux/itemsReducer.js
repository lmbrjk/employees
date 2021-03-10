import {CREATE_ITEM} from "./types"

const initialState = {
    items: [
        {id: 123451899367450121, name: "Иван", surname: "Иванов", number: 333555},
        {id: 123451899365450100, name: "Семен", surname: "Горбунков", number: 124899}
    ]
};

export const itemsReducer = (state = initialState, action) => {
    switch (action.type){
        case CREATE_ITEM:
            return { ...state, items: state.items.concat([action.payload]) };
        default: return state;
    }
}