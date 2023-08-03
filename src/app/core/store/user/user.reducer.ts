import {initialUserState, User, UserState} from './user.state';
import {createReducer, on} from '@ngrx/store';
import {UserActions} from './user.actions';


export const userReducer = createReducer(
  initialUserState,
  on(
    UserActions.retrieveUsers,
    (): UserState => initialUserState
  ),
  on(
    UserActions.retrieveUsersSuccess,
    (state, action) => updateUserState(state, action.data)
  )
);

function updateUserState(
  state: UserState,
  users: User[]
): UserState {
  return {
    ...state,
    data: users
  };
}
