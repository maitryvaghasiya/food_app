import { combineReducers } from "redux";
import { categoryReducer } from "./category.reduce";
import { counterReducer } from "./counter.reducer";
import { authUserReducer } from "./login.reducer";
import { postReducer } from "./post.reducer";

export const rootReducer = combineReducers({
    counter: counterReducer,
    category: categoryReducer,
    post: postReducer,
    auth: authUserReducer
})