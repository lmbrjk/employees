import {CREATE_ITEM} from "./types"
<<<<<<< HEAD
import {GET_INPUTS} from "./types"
=======
import {GET_ITEM} from "./types"
>>>>>>> 838aeb5bca183b15a80572e02c74535b9bbed361


export function createItem(item){
    return {
        type: CREATE_ITEM,
        payload: item
    };
}

<<<<<<< HEAD
export function getInputs(){
    return {
        type: GET_INPUTS
=======
export function getItem(id){
    return {
        type: GET_ITEM,
        payload: id
>>>>>>> 838aeb5bca183b15a80572e02c74535b9bbed361
    };
}