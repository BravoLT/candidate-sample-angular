import {userReducer} from './user.reducer';
import {initialUserState} from './user.state';
import {Action} from '@ngrx/store';
import {UserActions} from './user.actions';
import {createUser} from '../../../shared/test-utils';

describe('UserReducer', () => {
  describe('Default Action', () => {
    it('should set the initial state a Default Action', () => {
      const state = userReducer(initialUserState, {} as Action);
      expect(state).toEqual(initialUserState);
    });
  });

  describe('retrieveUsers Action', () => {
    it('should set the initial state for RetrieveUsers Action', () => {
      const state = userReducer(
        initialUserState,
        UserActions.retrieveUsers()
      );
      expect(state).toEqual(initialUserState);
    });
  });

  describe('retrieveUsersSuccess Action', () => {
    it('should update the store with the service response', () => {
      const users  = [createUser()];
      const expectedState = {data: users};
      const actualState = userReducer(
        {data: []},
        UserActions.retrieveUsersSuccess(users),

      );
      expect(actualState).toEqual(expectedState);
    });
  });
});
