import {combineReducers} from "redux";
import {itemsReducer} from "./itemsReducer";
<<<<<<< HEAD
import {inputsReducer} from "./inputsReducer";

export const rootReducer = combineReducers({
    items: itemsReducer,
    inputs: inputsReducer
=======

export const rootReducer = combineReducers({
    items: itemsReducer
>>>>>>> 838aeb5bca183b15a80572e02c74535b9bbed361
});