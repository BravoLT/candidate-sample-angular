import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User, UserState} from "../../store/user/user.state";
import {Observable} from "rxjs";
import {AppComponent} from "../../../app.component";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {}

  retrieve(): Observable<User[]> {
    const resposne = this.httpClient.get<User[]>(AppComponent.api.user.retrieve, {});
    console.log(resposne);
    return resposne;
  }
}
