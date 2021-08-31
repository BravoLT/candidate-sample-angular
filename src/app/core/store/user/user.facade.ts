import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";
import {Observable} from "rxjs";
import {selectUserById, userStateSelector} from "./user.selector";
import {UserRetrieveAction} from "./user.actions";
import {User, UserState} from "./user.state";

@Injectable({ providedIn: 'root' })
export class UserFacade {
  constructor(private store: Store<AppState>) {}

  dispatchRetrieve(): void {
    this.store.dispatch(new UserRetrieveAction());
  }

  retrieve(): Observable<UserState> {
    return this.store.select(userStateSelector);
  }

  retrieveById(id: string): Observable<User> {
    return this.store.select(selectUserById(id));
  }
}
