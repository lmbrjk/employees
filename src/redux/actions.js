import {CREATE_ITEM} from "./types"
import {GET_USER} from "./types"


export function createItem(item){
    return {
        type: CREATE_ITEM,
        payload: item
    };
}

export function getUser(id){
    return {
        type: GET_USER,
        payload: id
    };
}