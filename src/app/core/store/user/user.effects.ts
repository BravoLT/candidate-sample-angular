import {Injectable} from '@angular/core';
import {UserService} from '../../service/user/user.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, map, switchMap} from 'rxjs/operators';
import {UserActions} from './user.actions';
import {ErrorActions} from '../error/error.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private service: UserService) {}

  retrieve$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.retrieveUsers),
      switchMap(() => {
        return this.service.retrieve().pipe(
          map(response => UserActions.retrieveUsersSuccess(response)),
          catchError(error => of(ErrorActions.error(error)))
        );
      })
    );
  });
}
