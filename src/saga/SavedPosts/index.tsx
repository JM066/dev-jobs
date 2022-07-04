import { all, call, put, takeEvery } from "redux-saga/effects";
import { getSavedJobs, saveJobPost } from "../../firebase/firebase.utils";
import { savedPostsActions } from "src/reducer/SavePostSlice";
import { JobPostState } from "../../type";

export function* handleGetSavedPostFetch() {
  const { getSavedPostSuccess } = savedPostsActions;
  try {
    const fetchedJobs: JobPostState[] = yield call(getSavedJobs);
    console.log("fetch jobs", fetchedJobs);
    yield put(getSavedPostSuccess(fetchedJobs));
  } catch (error) {
    console.log("Eee", error);
  }
}

export function* watchSavedPostSaga() {
  const { getSavedPostRequest } = savedPostsActions;
  yield takeEvery(getSavedPostRequest, handleGetSavedPostFetch);
}

export function* handleAddJobPost(action: { payload: JobPostState }) {
  const { getSavedPostRequest } = savedPostsActions;
  try {
    yield call(saveJobPost, action.payload);
    yield put(getSavedPostRequest());
  } catch (error) {
    console.log(error);
  }
}
export function* watchAddJobPost() {
  const { addSavedPostSuccess } = savedPostsActions;
  yield takeEvery(addSavedPostSuccess, handleAddJobPost);
}
export function* rootSaga() {
  yield all([watchAddJobPost(), watchSavedPostSaga()]);
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
