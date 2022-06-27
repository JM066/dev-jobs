import { fork } from "redux-saga/effects";
import { rootSaga as SavedPosts } from "./SavedPosts";

export default function* rootSaga() {
  yield fork(SavedPosts);
}
