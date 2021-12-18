import { Props } from "framer-motion/types/types";
import React, { useState } from "react";
import { createContext } from "react";
import { JobPost } from "../types/types";

interface contextProps {
  savedPost: JobPost[];
  totalPost: number;
  addPost: (jobPost: JobPost) => void;
  removePost: (joId: string) => void;
  isItemSaved: (jobId: string) => void;
}
const defaultState = {
  savedPost: [],
  totalPost: 0,
  addPost: (jobPost: JobPost) => console.log(jobPost),
  removePost: (joId: string) => console.log(joId),
  isItemSaved: (jobId: string) => console.log(jobId),
};
const SavedPostContext = createContext<contextProps | undefined>(defaultState);

export function SavedPostContextProvider(props: Props) {
  const [saved, setSaved] = useState<JobPost[]>([]);

  const addSavedHandler = (jobPost: JobPost) => {
    setSaved((prev) => prev.concat(jobPost));
  };
  const removeSavedHandler = (jobId: string) => {
    setSaved((prev) => {
      return prev.filter((post) => post.id !== jobId);
    });
  };
  const isItemSavedHandler = (jobId: string) => {
    return saved.some((post) => post.id === jobId);
  };
  const context = {
    savedPost: saved,
    totalPost: saved.length,
    addPost: addSavedHandler,
    removePost: removeSavedHandler,
    isItemSaved: isItemSavedHandler,
  };
  return (
    <SavedPostContext.Provider value={context}>
      {props.children}
    </SavedPostContext.Provider>
  );
}

export default SavedPostContext;
