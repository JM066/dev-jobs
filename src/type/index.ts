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
};
export type JobPostBlock = JobPost & {
  about: RawDraftContentBlock;
  responsibilities: RawDraftContentBlock;
}
export type JobPostState = JobPost &  {
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
};
export type CheckBox = {
  id: string;
  title: string;
  selected: boolean;
};
export type ColorMode = {
  colorMode: "light" | "dark";
};
