import * as ActionTypes from '../ActionTypes'

const initVal = {
    isLoading: false,
    auth: null,
    error: '',
    authMsg: ''
}

export const authUserReducer = (state = initVal, action) => {
    console.log(action.type, action.payload);
    switch (action.type) {
        case ActionTypes.SIGN_UP:
            return {
                ...state,
                isLoading: false,
                user: action.payload.user,
                error: '',
                authMsg: action.payload.authMsg
            }
        case ActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload.user,
                error: '',
                authMsg: action.payload.authMsg
            }
        default:
            return state;
    }
}