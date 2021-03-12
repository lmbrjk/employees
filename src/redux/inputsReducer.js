import {GET_INPUTS} from "./types"

const initialState = {
    inputs: ["name", "surname", "post", "number"]
};

export const inputsReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_INPUTS:
            return { ...state, inputs: state.inputs};
        default: return state;
    }
}