import {Action} from "@ngrx/store";
import { User, UserSaveDto } from './user.state';

export enum UserActionType {
  Retrieve = '[User] Retrieve',
  RetrieveSuccess = '[User] Retrieve Success',
  Create  = '[User] Create',
  CreateSuccess  = '[User] Create Success'
}

export class UserRetrieveAction implements Action {
  readonly type = UserActionType.Retrieve;
}

export class UserRetrieveSuccessAction implements Action {
  readonly type = UserActionType.RetrieveSuccess;
  constructor(public data: User[]){}
}

export class UserCreateAction implements Action {
  readonly type = UserActionType.Create;
  constructor(public user: UserSaveDto) {}
}

export class UserCreateSuccessAction implements Action {
  readonly type = UserActionType.CreateSuccess;
  constructor(public user: User){}
}
