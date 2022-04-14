import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { JobPost } from "../type";

interface ProviderState {
  savedPost: JobPost[];
  totalPost: number;
  addPost: (jobPost: JobPost) => void;
  removePost: (jobId: string) => void;
  isItemSaved: (jobId: string) => boolean;
}
const defaultState = {
  savedPost: [],
  totalPost: 0,
  addPost: () => [],
  removePost: () => [],
  isItemSaved: () => false,
};
export const SavedPostContext = createContext<ProviderState>(defaultState);

export function SavedPostContextProvider(
  props: React.PropsWithChildren<Record<never, never>>
) {
  const [saved, setSaved] = useState<JobPost[]>([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("savedPosts") || "[]");
    if (savedPosts) {
      setSaved(savedPosts);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("savedPosts", JSON.stringify(saved));
  }, [saved]);

  const addSavedHandler = (jobPost: JobPost) => {
    setSaved((prev) => prev.concat(jobPost));
  };
  const removeSavedHandler = (jobId: string) => {
    setSaved((prev) => {
      return prev.filter((post) => post.id !== jobId);
    });
  };
  const isItemSavedHandler = (jobId: string) => {
    return saved?.some((post) => post.id === jobId);
  };
  const context = {
    savedPost: saved,
    totalPost: saved.length,
    addPost: addSavedHandler,
    removePost: removeSavedHandler,
    isItemSaved: isItemSavedHandler,
  };
  return (
    <SavedPostContext.Provider value={context} {...props}>
      {props.children}
    </SavedPostContext.Provider>
  );
}
export default SavedPostContextProvider;
