
export interface UserState {
  data: User[];
}

export interface User {
  id: string;
  name: string;
  firstName: string;
  middleName: string;
  lastName: string;
  updated: string;
}

export const initialUserState: UserState = {
  data: []
};
