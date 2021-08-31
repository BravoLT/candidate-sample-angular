import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UserState} from "./user.state";
import {AppState} from "../app.state";

export const userStateSelector = createFeatureSelector<AppState, UserState>('user');

export const selectUserById = (id: string) => createSelector(
  userStateSelector,
  (state) => state.data.filter(record => record.id === id)[0]
);
