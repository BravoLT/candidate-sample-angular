import {UserEffects} from './user.effects';
import {Actions} from '@ngrx/effects';
import {UserService} from '../../service/user/user.service';
import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {of} from 'rxjs';
import {UserActions} from './user.actions';
import {cold, hot} from 'jasmine-marbles';
import {ErrorActions} from '../error/error.actions';
import {createUser} from '../../../shared/test-utils';


describe('UserEffects', () => {
  let effects: UserEffects;
  let actions$: Actions;
  let userServiceSpy: jasmine.SpyObj<UserService>;

  beforeEach(() => {
    userServiceSpy = jasmine.createSpyObj('UserService', ['retrieve']);

    TestBed.configureTestingModule({
      providers: [
        UserEffects,
        provideMockActions(() => actions$),
        provideMockStore({
          initialState: {
            data: []
          }
        }),
        {provide: UserService, useValue: userServiceSpy}
      ]
    });

    actions$ = TestBed.inject(Actions);
    effects = TestBed.inject(UserEffects);
  });

  describe('retrieve$', () => {
    it('should retrieve users and dispatch a retrieveUserSuccess action', () => {
      const userInfo = [createUser()];
      userServiceSpy.retrieve.and.returnValue(of(userInfo));

      const action = UserActions.retrieveUsers();
      actions$ = hot('-a-', {a: action});

      const dispatchedAction = UserActions.retrieveUsersSuccess(userInfo);
      const expected$ = cold('-b-', {b: dispatchedAction});

      expect(effects.retrieve$).toBeObservable(expected$);
      expect(userServiceSpy.retrieve).toHaveBeenCalledTimes(1);
    });

    it('should retrieve an error and dispatch and Error Action', () => {
      const errorResponse = new Error('error');
      userServiceSpy.retrieve.and.returnValue(
        cold('--#', undefined, errorResponse)
      );

      const action = UserActions.retrieveUsers();
      actions$ = hot('-a-', {a: action});

      const dispatchedAction = ErrorActions.error(errorResponse);
      const expected$ = cold('---b-', {b: dispatchedAction});

      expect(effects.retrieve$).toBeObservable(expected$);
      expect(userServiceSpy.retrieve).toHaveBeenCalledTimes(1);
    });
  });
});
