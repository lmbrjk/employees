import {CREATE_ITEM} from "./types"

export function createItem(item){
    return {
        type: CREATE_ITEM,
        payload: item
    }
}