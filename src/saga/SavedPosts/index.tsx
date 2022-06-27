import { all, call, put, takeEvery } from "redux-saga/effects";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import {
  getSavedPostRequest,
  getSavedPostSuccess,
  // addPostRequest,
} from "src/reducer/SavePostSlice";
interface ParamType {
  jobPost: any[];
}
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const getSavedJobs = async () => {
  const jobs: any = [];
  const jobRef = firestore.collection(`saved`);
  const snapShot = await jobRef.get();
  snapShot.forEach((doc) => {
    jobs.push(doc.data());
  });
  return jobs;
};
export const saveJobPost = async (jobPost: any) => {
  const jobRef = await firestore.collection(`saved`).add(jobPost);

  try {
    await jobRef.set(jobPost);
  } catch (err) {
    console.log("error occured while fetching");
  }
};

export function* handleGetSavedPostFetch() {
  try {
    const savedPost: string[] = yield call(getSavedJobs);
    yield put(getSavedPostSuccess(savedPost));
  } catch {
    console.log("error");
  }
}

export function* getSavedPostSaga() {
  yield takeEvery(getSavedPostRequest, handleGetSavedPostFetch);
}

// export function* handleSavePost(action: { payload: ParamType }) {
//   try {
//     const savedPost: string[] = yield call(saveJobPost, action.payload,    'POST',
//     'json',);
//     yield put(getSavedPostSuccess(savedPost));
//   } catch {
//     console.log("error");
//   }
// }
// export function* addPostSaga() {
//   yield takeEvery(addPostRequest, handleSavePost);
// }
export function* rootSaga() {
  yield all([getSavedPostSaga() /*addPostSaga()*/]);
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
