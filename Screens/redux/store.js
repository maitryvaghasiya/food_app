import { createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { rootReducer } from "./reducer/rootReducer"
import { persistStore, persistReducer } from 'redux-persist'
// import AsyncStorage from '@react-native-community/async-storage'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "./saga/rootSaga"

// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
//     whitelist: ["counter"]
//   };

// const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

const middlewares = [thunk, sagaMiddleware]


// export const  store = createStore(persistedReducer, applyMiddleware(...middlewares))
export const store = createStore(rootReducer, applyMiddleware(...middlewares))
// let persistor = persistStore(store)
sagaMiddleware.run(rootSaga)

    // return {store, persistor};
    // return 1;
