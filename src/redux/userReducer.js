import {GET_USER} from "./types"

const initialState = {
    user: []
};

export const userReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_USER:
            return { ...state, user: state.items.find( item => item.id === action.payload)};
        default: return state;
    }
}