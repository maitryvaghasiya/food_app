import {createStore,applyMiddleware} from "redux"
import thunk from 'redux-thunk'
import { rootReducer } from "./reducer/rootReducer"

export const configStore = () => {
    let store = createStore(rootReducer, applyMiddleware(thunk))

    return store;
}