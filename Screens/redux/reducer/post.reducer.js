import * as ActionTypes from "../ActionTypes"

let initVal = {
    post: []
}

export const postReducer =(state = initVal, action) => {
    console.log("Post Reducer", action.type, state)
    switch(action.type) {
       
        default :
            return state

    }
}