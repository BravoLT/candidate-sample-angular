import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User, UserState} from "../../store/user/user.state";
import {Observable} from "rxjs";
import {AppComponent} from "../../../app.component";
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  rowData:any;
  baseUrl = environment.backend

  constructor(private httpClient: HttpClient) {}

  retrieve(): Observable<User[]> {
    return this.httpClient.post<User[]>(AppComponent.api.user.retrieve, {});
  }

  createUser(firstName:String, middleName:String, lastName:String, phone:String):Observable<User>{
      return  this.httpClient.post<User>(this.baseUrl+'/user/create',{
        "firstName":firstName,
        "middleName":middleName,
        "lastName":lastName,
        "phoneNumber":phone       
      });
  }

  update(id:String,firstName:String, middleName:String, lastName:String, phone:String):Observable<User>{
    return this.httpClient.patch<User>(this.baseUrl+'/update/${id}',{
      "firstName":firstName,
      "middleName":middleName,
      "lastName":lastName,
      "phoneNumber":phone 

    });
  }


}
