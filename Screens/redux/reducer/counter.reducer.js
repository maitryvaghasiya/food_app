import * as ActionTypes from "../ActionTypes"

let initVal = {
    count: 0
}

export const counterReducer =(state = initVal, action) => {
    console.log(action.type, state)
    switch(action.type) {
        case ActionTypes.INCREMENT_COUNTER:
            return{
                ...state,
                count: state.count + 1
            }
        case ActionTypes.DECREMENT_COUNTER:
            return{
                ...state,
                count: state.count - 1
            }
        default :
            return state

    }
}