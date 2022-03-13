export type User = {
  id?: string;
  displayName?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

export type UserData = {
  id: string;
  displayName: string;
  email: string;
  createdAt: Date | null;
};

export type Job = {
  companyName: string;
  address: string;
  employees: number;
  title: string;
  type: string;
  about?: string;
  responsibilities: string;
  preferences: string;
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
  preference: string;
};
export type CheckBox = {
  id: string;
  title: string;
  selected: boolean;
};
