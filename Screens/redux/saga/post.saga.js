import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchPostAPI } from '../../../common/api/post.api';

import * as ActionTypes from "../ActionTypes"


function* fetchPost(action) {
  try {
    const response = yield call(fetchPostAPI);
    console.log("fthgbji",response);
    //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
  } catch (e) {
    console.log(e);
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

function* watchGetPost() {
  yield takeEvery(ActionTypes.GET_POST, fetchPost);
}

export function* postSaga() {
  yield all([
    watchGetPost()
  ])
}
