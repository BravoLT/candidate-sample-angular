import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { User, UserSaveDto } from '../../store/user/user.state';
import {Observable} from "rxjs";
import {AppComponent} from "../../../app.component";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {}

  retrieve(): Observable<User[]> {
    return this.httpClient.post<User[]>(AppComponent.api.user.retrieve, {});
  }

  create(user: UserSaveDto): Observable<User> {
    return this.httpClient.post<User>(AppComponent.api.user.create, user);
  }

}
