import { put, takeLatest, call } from "redux-saga/effects";
import { FETCH_USER_DATA } from "./constants";
import { Getusers } from "./actions";
import { fecthUsers } from "./fetchUsers";

export function* watchFetchUserList(action) {
  try {
    const response = yield call(fecthUsers, action.payload);
    yield put(Getusers(response.data.data));
  } catch (error) {
    console.log("something went wrong");
  }
}

export function* watchFetchUserListSaga() {
  yield takeLatest(FETCH_USER_DATA, watchFetchUserList);
}
