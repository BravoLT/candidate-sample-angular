import { Component, OnInit } from '@angular/core';
import {UserFacade} from "../../core/store/user/user.facade";
import {User} from "../../core/store/user/user.state";

@Component({
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  user: User | undefined;

  constructor(private userFacade: UserFacade) { }

  ngOnInit(): void {
    this.userFacade
      .retrieveById('008a4215-0b1d-445e-b655-a964039cbb5a')
      .subscribe(user => this.user = user);
  }
}
