import React, { useState } from "react";
import { createContext } from "react";
import { JobType } from "../types/types";

interface contextProps {
  savedPost: JobType[];
  totalPost: number;
  addPost: (jobPost: JobType) => void;
  removePost: (joId: string) => void;
  isItemSaved: (jobId: string) => void;
}
const defaultState = {
  savedPost: [],
  totalPost: 0,
  addPost: (jobPost: JobType) => console.log(jobPost),
  removePost: (joId: string) => console.log(joId),
  isItemSaved: (jobId: string) => console.log(jobId),
};
const SavedPostContext = createContext<contextProps | undefined>(defaultState);

interface ProviderProps<T> {
  value: T;
  children?: React.ReactNode | undefined;
}
export function SavePostContextProvider(props: ProviderProps<object>) {
  const [saved, setSaved] = useState<JobType[]>([]);

  const addSavedHandler = (jobPost: JobType) => {
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
