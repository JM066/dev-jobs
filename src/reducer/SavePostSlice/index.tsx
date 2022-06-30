import { JobPostState, JobPostBlock } from "../../type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: ProviderState = {
  savedPost: [],
  isLoading: false,
};
export interface ProviderState {
  savedPost: JobPostState[];
  isLoading: boolean;
}
export const savedPostSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    getSavedPostRequest: (state) => {
      state.isLoading = true;
    },
    getSavedPostSuccess: (state, action: PayloadAction<JobPostState[]>) => {
      state.savedPost = action.payload;
      state.isLoading = false;
    },
    addPostRequest: (state, action: PayloadAction<JobPostState>) => {
      state.savedPost = state.savedPost.concat(action.payload);
      state.isLoading = true;
    },
    addPostSuccess: (state) => {
      state.isLoading = false;
    },
    removePostRequest: (state, action: PayloadAction<string>) => {
      const updatedSavedPost = state.savedPost.filter(
        (post: JobPostState) => post.id !== action.payload
      );
      state.savedPost = updatedSavedPost;
    },
    removePostSuccess: (state) => {},
  },
});

export const savedPosts = savedPostSlice.name;
export const savedPostsActions = savedPostSlice.actions;
export const savedPostsReducer = savedPostSlice.reducer;
