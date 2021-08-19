import {initialUserState, UserState} from './user.state';
import { UserActionType, UserCreateSuccessAction, UserRetrieveSuccessAction } from './user.actions';
import {Action} from '@ngrx/store';

export function userReducer(
  state: UserState = initialUserState,
  action: Action
): UserState {
  switch (action.type){
    case UserActionType.Retrieve:
      return initialUserState;
    case UserActionType.RetrieveSuccess:
      return handleUserRetrieveSuccessAction(state, action as UserRetrieveSuccessAction);
    case UserActionType.Create:
      return state;
    case UserActionType.CreateSuccess:
      return handleUserCreateSuccessAction(state, action as UserCreateSuccessAction);
    default:
      return state;
  }
}

function handleUserRetrieveSuccessAction(
  state: UserState,
  action: UserRetrieveSuccessAction
): UserState {
  return {
    ...state,
    data: action.data
  };
}

function handleUserCreateSuccessAction(
  state: UserState,
  action: UserCreateSuccessAction,
): UserState {
  return {
    ...state,
    data: [...state.data, action.user]
  };
}
