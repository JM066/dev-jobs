// import React, { useEffect, useReducer } from "react";
// import { createContext } from "react";
// import savePostReducer, {
//   initialState,
//   ProviderState,
// } from "src/reducer/SavePostReducer";
// import { JobPostState } from "../../type";

// // interface ProviderState {
// //   savedPost: JobPost[];
// //   totalPost: number;
// //   addPost: (jobPost: JobPost) => void;
// //   removePost: (jobId: string) => void;
// //   isItemSaved: (jobId: string) => boolean;
// // }

// export const SavedPostContext = createContext<ProviderState>(initialState);

// export function SavedPostProvider(
//   props: React.PropsWithChildren<Record<never, never>>
// ) {
//   const [state, dispatch] = useReducer(savePostReducer, initialState);

//   useEffect(() => {
//     const savedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
//     if (savedPosts) {
//       dispatch({
//         type: "ADD_POST",
//         payload: {
//           savedPost: savedPosts,
//           totalPost: savedPosts.length,
//         },
//       });
//     }
//   }, []);
//   useEffect(() => {
//     localStorage.setItem("posts", JSON.stringify(state.savedPost));
//   }, [state]);

//   const addPost = (jobPost: JobPostState) => {
//     const updatedSavedPost = state.savedPost.concat(jobPost);
//     const total = updatedSavedPost.length;

//     dispatch({
//       type: "ADD_POST",
//       payload: {
//         savedPost: updatedSavedPost,
//         totalPost: total,
//       },
//     });
//   };
//   const removePost = (jobId: string) => {
//     const updatedSavedPost = state.savedPost.filter(
//       (post: JobPostState) => post.id !== jobId
//     );
//     const total = updatedSavedPost.length;

//     dispatch({
//       type: "REMOVE_POST",
//       payload: {
//         savedPost: updatedSavedPost,
//         totalPost: total,
//       },
//     });
//   };
//   const isItemSaved = (jobId: string) => {
//     const isSaved = state.savedPost.some(
//       (post: JobPostState) => post.id === jobId
//     );
//     return isSaved;
//   };

//   const value = {
//     savedPost: state.savedPost,
//     totalPost: state.totalPost,
//     addPost,
//     removePost,
//     isItemSaved,
//   };
//   return (
//     <SavedPostContext.Provider value={value} {...props}>
//       {props.children}
//     </SavedPostContext.Provider>
//   );
// }
// export default SavedPostProvider;
import { configureStore } from "@reduxjs/toolkit";
// import { all } from "redux-saga/effects";
// import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   persistReducer,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducer/index";

import rootSaga from "../saga/index";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);
export default store;

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });
