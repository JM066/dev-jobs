import { JobPostState } from "../../type";
import { createSlice } from "@reduxjs/toolkit";

export const initialState: ProviderState = {
  savedPost: [],
  isLoading: false,
};
export interface ProviderState {
  savedPost: JobPostState[];
  isLoading: boolean;

  // addPost: (jobPost: JobPostState) => void;
  // removePost: (jobId: string) => void;
  // isItemSaved: (jobId: string) => boolean;
}
// interface Action {
//   type: string;
//   payload: Payload;
// }
// type Payload = {
//   savedPost: JobPostState[];
//   totalPost: number;
// };
// const savePostReducer = (state: ProviderState, action: Action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case "ADD_POST":
//       console.log("ADD_POST", payload);
//       return {
//         ...state,
//         savedPost: payload.savedPost,
//         totalPost: payload.totalPost,
//       };
//     case "REMOVE_POST":
//       console.log("REMOVE_POST", payload);
//       return {
//         ...state,
//         savedPost: payload.savedPost,
//         totalPost: payload.totalPost,
//       };

//     default:
//       throw new Error(`No case for type ${type} found`);
//   }
// };

// export default savePostReducer;
export const savedPostSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    getSavedPostRequest: (state) => {
      state.isLoading = true;
    },
    getSavedPostSuccess: (state, action) => {
      state.savedPost = action.payload;
      state.isLoading = false;
    },
    addPostRequest: (state) => {
      state.isLoading = true;
    },
    addPostSuccess: (state, action) => {
      state.savedPost = action.payload;
      state.isLoading = false;
    },
    removePostRequest: (state) => {},
    removePostSuccess: (state) => {},
  },
});

export const savedPosts = savedPostSlice.name;
export const { getSavedPostRequest, getSavedPostSuccess, addPostRequest } =
  savedPostSlice.actions;

export const savedPostsReducer = savedPostSlice.reducer;
