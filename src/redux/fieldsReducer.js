import {CHANGE_FIELDS_LIST} from "./types"

const initialState = {
    fields: ["name", "middlename", "surname", "birthday", "number", "post", "division"]
};

export const fieldsReducer = (state = initialState, action) => {
    switch (action.type){
        case CHANGE_FIELDS_LIST:
            return { ...state, fields: state.fields };
        default: return state;
    }
}