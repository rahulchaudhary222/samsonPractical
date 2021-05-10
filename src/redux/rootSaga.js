import { all } from "redux-saga/effects";
import { watchFetchUserListSaga } from "../components/HomePage/saga";

export default function* rootSaga() {
  yield all([watchFetchUserListSaga()]);
}
