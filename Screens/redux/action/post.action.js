import * as ActionType from "../ActionTypes"

export const getPost = () => (dispatch) => {
    dispatch({ type: ActionType.GET_POST })
}