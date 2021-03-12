import {CREATE_ITEM} from "./types"
import {GET_INPUTS} from "./types"


export function createItem(item){
    return {
        type: CREATE_ITEM,
        payload: item
    };
}

export function getInputs(){
    return {
        type: GET_INPUTS
    };
}