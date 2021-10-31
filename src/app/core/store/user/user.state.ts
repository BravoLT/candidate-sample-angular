
export interface UserState {
  data: User[];
}

export interface User {
  firstName: string;
  middleName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  role: string;
}

export const initialUserState: UserState = {
  data: []
};
