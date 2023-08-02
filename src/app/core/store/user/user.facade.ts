import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../app.state';
import {Observable} from 'rxjs';
import {UserState} from './user.state';
import {UserActions} from './user.actions';
import {selectUserState} from './user.selector';

@Injectable({ providedIn: 'root' })
export class UserFacade {
  constructor(private store: Store<AppState>) {}

  dispatchRetrieve(): void {
    this.store.dispatch(UserActions.retrieveUsers());
  }

  retrieve(): Observable<UserState> {
    return this.store.select(selectUserState);
  }
}
