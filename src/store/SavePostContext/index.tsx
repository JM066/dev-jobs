import React, { useEffect, useReducer } from "react";
import { createContext } from "react";
import savePostReducer, {
  initialState,
  ProviderState,
} from "src/reducer/SavePostReducer";
import { JobPost } from "../../type";

// interface ProviderState {
//   savedPost: JobPost[];
//   totalPost: number;
//   addPost: (jobPost: JobPost) => void;
//   removePost: (jobId: string) => void;
//   isItemSaved: (jobId: string) => boolean;
// }

export const SavedPostContext = createContext<ProviderState>(initialState);

export function SavedPostProvider(
  props: React.PropsWithChildren<Record<never, never>>
) {
  const [state, dispatch] = useReducer(savePostReducer, initialState);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
    if (savedPosts) {
      dispatch({
        type: "ADD_POST",
        payload: {
          savedPost: savedPosts,
          totalPost: savedPosts.length,
        },
      });
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(state.savedPost));
  }, [state]);

  const addPost = (jobPost: JobPost) => {
    const updatedSavedPost = state.savedPost.concat(jobPost);
    const total = updatedSavedPost.length;

    dispatch({
      type: "ADD_POST",
      payload: {
        savedPost: updatedSavedPost,
        totalPost: total,
      },
    });
  };
  const removePost = (jobId: string) => {
    const updatedSavedPost = state.savedPost.filter(
      (post: JobPost) => post.id !== jobId
    );
    const total = updatedSavedPost.length;

    dispatch({
      type: "REMOVE_POST",
      payload: {
        savedPost: updatedSavedPost,
        totalPost: total,
      },
    });
  };
  const isItemSaved = (jobId: string) => {
    const isSaved = state.savedPost.some((post: JobPost) => post.id === jobId);
    return isSaved;
  };

  const value = {
    savedPost: state.savedPost,
    totalPost: state.totalPost,
    addPost,
    removePost,
    isItemSaved,
  };
  return (
    <SavedPostContext.Provider value={value} {...props}>
      {props.children}
    </SavedPostContext.Provider>
  );
}
export default SavedPostProvider;
