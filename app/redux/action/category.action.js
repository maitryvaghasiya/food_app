import * as ActionTypes from "../ActionTypes"

export const getCategory =() => (dispatch) => {
    try{
        fetch("http://192.168.1.5:8000/category")
        .then((response) => response.json())
        .then((data) => dispatch({type: ActionTypes.GET_CATEGORY, payload: data}))
        .catch((error) => console.log(error))
    } catch (e) {
        console.log(e);
    }
}