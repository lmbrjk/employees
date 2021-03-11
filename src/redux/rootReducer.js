import {combineReducers} from "redux";
import {itemsReducer} from "./itemsReducer";
import {userReducer} from "./userReducer";

export const rootReducer = combineReducers({
    items: itemsReducer,
    user: userReducer
});