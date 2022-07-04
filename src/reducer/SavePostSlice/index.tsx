import { JobPostState } from "../../type";
import { createSlice } from "@reduxjs/toolkit";

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
    addSavedPostSuccess: (state, _action) => {
      state.isLoading = false;
    },
    getSavedPostRequest: (state) => {
      state.isLoading = true;
    },
    getSavedPostSuccess: (state, action) => {
      state.savedPost = action.payload;
      state.isLoading = false;
    },
  },
});

export const savedPosts = savedPostSlice.name;
export const savedPostsActions = savedPostSlice.actions;
export const savedPostsReducer = savedPostSlice.reducer;
