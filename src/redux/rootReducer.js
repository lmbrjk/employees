import {combineReducers} from "redux";
import {itemsReducer} from "./itemsReducer";
import {fieldsReducer} from "./fieldsReducer";

export const rootReducer = combineReducers({
    items: itemsReducer,
    fields: fieldsReducer
});