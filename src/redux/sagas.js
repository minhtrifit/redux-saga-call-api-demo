import { call, put, takeEvery } from "redux-saga/effects";
import {
  getUsersFetch,
  getUsersSuccess,
  getUsersFailed,
} from "./reducers/UserReducer";

function* workGetUsersFetch() {
  try {
    const rs = yield call(() =>
      fetch("https://jsonplaceholder.typicode.com/users")
    );
    const users = yield rs.json();
    yield put(getUsersSuccess(users));
  } catch (e) {
    yield put(getUsersFailed());
  }
}

function* userSaga() {
  // yield takeEvery("users/getUsersFetch", workGetUsersFetch);
  yield takeEvery(getUsersFetch, workGetUsersFetch);
}

export default userSaga;
