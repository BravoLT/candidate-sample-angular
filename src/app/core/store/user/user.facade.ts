import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";
import {Observable} from "rxjs";
import {userStateSelector} from "./user.selector";
import { UserCreateAction, UserRetrieveAction } from './user.actions';
import { UserSaveDto, UserState } from './user.state';

@Injectable({ providedIn: 'root' })
export class UserFacade {
  constructor(private store: Store<AppState>) {}

  dispatchRetrieve(): void {
    this.store.dispatch(new UserRetrieveAction());
  }

  dispatchCreate(user: UserSaveDto): void {
    this.store.dispatch(new UserCreateAction(user));
  }

  retrieve(): Observable<UserState> {
    return this.store.select(userStateSelector);
  }
}
