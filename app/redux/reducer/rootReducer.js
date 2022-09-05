import { combineReducers } from "redux";
import { categoryReducer } from "./category.reduce";
import { counterReducer } from "./counter.reducer";

export const rootReducer = combineReducers({
    counter : counterReducer,
    category : categoryReducer
})