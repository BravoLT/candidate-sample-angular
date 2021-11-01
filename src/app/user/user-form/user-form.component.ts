import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {AppComponent} from "../../app.component";
import {throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Component({
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {

  }

  private  handleError(errorRes: HttpErrorResponse) {
    return throwError(errorRes.error.error.message);
  }

  submit(loginForm: NgForm) {
    const data = loginForm.value;
    console.log("button clicked " + data.firstName + " " + data.lastName + ' ' + AppComponent.api.user.create);
    return  this.httpClient.post(AppComponent.api.user.create, {
      firstName: data.firstName,
      middleName: data.middleName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
      email: data.email,
      password: data.password,
      role: data.role
    }).subscribe();
  }

}
