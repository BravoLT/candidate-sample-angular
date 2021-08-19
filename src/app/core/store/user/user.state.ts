
export interface UserState {
  data: User[];
}

export interface User {
  id: string;
  name: string;
  updated: string;
}

export interface UserSaveDto {
  firstName: string;
  middleName: string;
  lastName: string;
  phoneNumber: string;
}

export const initialUserState: UserState = {
  data: []
};
