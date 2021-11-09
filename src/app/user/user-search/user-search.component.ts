import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {UserFacade} from "../../core/store/user/user.facade";
import {Subject} from "rxjs";
import {User, UserState} from "../../core/store/user/user.state";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {filter, takeUntil} from "rxjs/operators";
import {UserService} from "../../core/service/user/user.service";
import { Router } from '@angular/router';

@Component({
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements AfterViewInit, OnDestroy, OnInit {

  constructor(private userFacade: UserFacade, private userSrvice: UserService, private router: Router) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  destroyed$ = new Subject<void>();
  state: UserState | undefined;
  tableFields: string[] = ['name', 'updated','edit','delete'];
  tableSource!: MatTableDataSource<User>;

  ngAfterViewInit(): void {
    this.userFacade
    .retrieve()
    .pipe(
      takeUntil(this.destroyed$),
      filter(state => state?.data?.length > 0)
    )
    .subscribe((state) => {
      this.state = state;
      this.tableSource = new MatTableDataSource<User>(state.data);
      this.tableSource.paginator = this.paginator;
      this.tableSource.sort = this.sort;
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  ngOnInit(): void {
    this.userFacade.dispatchRetrieve();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableSource.filter = filterValue.trim().toLowerCase();
  }

  editRecord(rowData:any){
    
    this.userSrvice.rowData=rowData;
    this.router.navigate(['/user/form'])

  }
}
