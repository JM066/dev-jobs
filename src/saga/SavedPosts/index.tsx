import { all, call, put, takeEvery } from "redux-saga/effects";
import { getSavedJobs, saveJobPost } from "../../firebase/firebase.utils";
import { savedPostsActions } from "src/reducer/SavePostSlice";
import { JobPostState } from "../../type";

export function* handleGetSavedPostFetch() {
  const { getSavedPostSuccess } = savedPostsActions;
  try {
    const fetchedJobs: JobPostState[] = yield call(getSavedJobs);
    console.log("does it arrive?");
    yield put(getSavedPostSuccess(fetchedJobs));
  } catch {
    console.log("error");
  }
}
export interface IHttpResult {
  success: boolean;
  data: any;
}
export function* watchSavedPostSaga() {
  const { getSavedPostRequest } = savedPostsActions;
  yield takeEvery(getSavedPostRequest, handleGetSavedPostFetch);
}

export function* handleSavePost(action: { payload: JobPostState }) {
  const { addPostSuccess } = savedPostsActions;
  try {
    const savedPost: JobPostState[] = yield call(saveJobPost, action.payload);
    console.log("savedPost", savedPost);
    yield put(addPostSuccess(savedPost));
  } catch {
    console.log("error");
  }
}
export function* watchAddPostSaga() {
  const { addPostRequest } = savedPostsActions;
  yield takeEvery(addPostRequest, handleSavePost);
}
export function* rootSaga() {
  yield all([watchSavedPostSaga(), watchAddPostSaga()]);
}
// export default function* rootSaga() {
//   yield all([
//       watchOauthRequest(),
//       watchOauthSuccess(),
//       watchLogOut(),
//       watchOauthClientRequest(),
//       watchOauthClientSuccess(),
//       watchGetClientInfo(),
//       watchSwitchUser(),
//       watchSwitchLogOut(),
//   ])
// }
