import {combineReducers} from "redux";
import {itemsReducer} from "./itemsReducer";
import {fieldsReducer} from "./fieldsReducer";
import {reducer as formReducer} from "redux-form";

export const rootReducer = combineReducers({
    items: itemsReducer,
    fields: fieldsReducer,
    form: formReducer
});