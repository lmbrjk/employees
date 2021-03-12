import {combineReducers} from "redux";
import {itemsReducer} from "./itemsReducer";
import {inputsReducer} from "./inputsReducer";

export const rootReducer = combineReducers({
    items: itemsReducer,
    inputs: inputsReducer
});