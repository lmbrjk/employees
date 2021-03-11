import {CREATE_ITEM} from "./types"
import {GET_ITEM} from "./types"


export function createItem(item){
    return {
        type: CREATE_ITEM,
        payload: item
    };
}

export function getItem(id){
    return {
        type: GET_ITEM,
        payload: id
    };
}