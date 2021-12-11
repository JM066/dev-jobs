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

export type JobType = {
  companyName: string;
  address: string;
  employees: number;
  title: string;
  type: string;
  aboutJob?: string;
  responsibilities: string;
  preferences: string;
};
