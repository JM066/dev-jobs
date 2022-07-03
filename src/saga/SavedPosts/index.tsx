import { all, call, put, takeEvery } from "redux-saga/effects";
import { getSavedJobs, saveJobPost } from "../../firebase/firebase.utils";
import { savedPostsActions } from "src/reducer/SavePostSlice";
import { JobPostState } from "../../type";

// const config = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID,
// };

// firebase.initializeApp(config);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// export const getSavedJobs = async () => {
//   const jobs: JobPostState[] = [];
//   const jobRef = firestore.collection(`saved`);
//   const snapShot = await jobRef.get();
//   snapShot.forEach((doc) => {
//     jobs.push(doc.data() as JobPostState);
//   });
//   return jobs;
// };
// export const saveJobPost = async (jobPost: JobPostState) => {
//   const jobRef = await firestore.collection(`saved`).add(jobPost);

//   try {
//     await jobRef.set(jobPost);
//   } catch (err) {
//     console.log("error occured while fetching");
//   }
// };

export function* handleGetSavedPostFetch() {
  const { getSavedPostSuccess } = savedPostsActions;
  try {
    const fetchedJobs: JobPostState[] = yield call(getSavedJobs);
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
