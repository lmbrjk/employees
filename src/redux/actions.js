import {CREATE_ITEM, CHANGE_ITEM, CHANGE_FIELDS_LIST} from "./types"

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
// export function changeItem({id, item}){
//     return {
//         type: CHANGE_ITEM,
//         id, item
//     };
// }

export function changeFieldsList(hiddenFields){
    return {
        type: CHANGE_FIELDS_LIST,
        hiddenFields
    };
}
