import {UserFacade} from './user.facade';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {TestBed} from '@angular/core/testing';
import {UserActions} from './user.actions';
import {skip} from 'rxjs';
import {cold} from 'jasmine-marbles';

describe('UserFacade', () => {
  let facade: UserFacade;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserFacade,
        provideMockStore({
          initialState: {
            data: []
          }
        })
      ]
    });

    facade = TestBed.inject(UserFacade);
    store = TestBed.inject(MockStore);
  });

  describe('dispatchRetrieve', () => {
    it('should dispatch a retrieveUsers Action', () => {
      const expectedAction = UserActions.retrieveUsers();

      store.scannedActions$.pipe(skip(1)).subscribe((action) => expect(action).toEqual(expectedAction));
      facade.dispatchRetrieve();
    });
  });

  describe('retrieve', () => {
    it('should return current loaded users', () => {
      spyOn(store, 'select').and.returnValue(
        cold('a', {a: []})
      );

      const actual$ = facade.retrieve();
      const expected$ = cold('b', {b: []});

      expect(actual$).toBeObservable(expected$);
    });
  });
});
