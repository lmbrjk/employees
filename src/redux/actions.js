import {CREATE_ITEM, CHANGE_ITEM} from "./types"

export function createItem(item){
    return {
        type: CREATE_ITEM,
        payload: item
    };
}

export function changeItem({id, item}){
    return {
        type: CHANGE_ITEM,
        id, item
    };
}

// export function changeItem({id, inputName, changes}){
//     return {
//         type: CHANGE_ITEM,
//         id, inputName, changes
//     };
// }