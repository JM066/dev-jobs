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
  about?: string;
  responsibilities: string;
  preferences: string;
};

export type Job = {
  company: string;
  address: string;
  about?: string;
  type: string;
  title: string;
  responsibilities: string;
  preferences: string;
};
export type CheckBox = {
  id: string;
  title: string;
  selected: boolean;
};
export type ColorMode = {
  colorMode: "light" | "dark";
};
