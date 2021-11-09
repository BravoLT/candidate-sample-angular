import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/service/user/user.service';

@Component({
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  firstName:String ='';
  lastName:String ='';
  middleName:String ='';

  rowData:any;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    var obj =this.userService.rowData;
    this.firstName=obj['firstName'];
    this.lastName=obj['lastName'];
    this.middleName=obj['middleName'];
  }

}
