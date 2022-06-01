import {
  RawDraftContentBlock,
  RawDraftContentState,
  EditorState,
} from "draft-js";
export type SignUpForm = {
  id?: string;
  displayName?: string;
  email: string;
  password: string;
  passwordConfirm: string;
};
export type SignInForm = {
  email: string;
  password: string;
};
export type UserData = {
  id: string;
  displayName: string;
  email: string;
  createdAt: Date | null;
};

export type JobPost = {
  id: string;
  company: string;
  address: string;
  employees: number;
  title: string;
  type: string;
  about: RawDraftContentBlock | RawDraftContentState;
  responsibilities: RawDraftContentBlock | RawDraftContentState;
};

export type JobPostState = {
  id: string;
  company: string;
  address: string;
  employees: number;
  title: string;
  type: string;
  about: RawDraftContentState;
  responsibilities: RawDraftContentState;
};

export type EditorStateType = {
  id: string;
  company: string;
  address: string;
  employees: number;
  title: string;
  type: string;
  about: EditorState;
  responsibilities: EditorState;
  // [key: string]: EditorState;
};
export type CheckBox = {
  id: string;
  title: string;
  selected: boolean;
};
export type ColorMode = {
  colorMode: "light" | "dark";
};
