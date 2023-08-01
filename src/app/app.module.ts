import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UserFormComponent} from './user/user-form/user-form.component';
import {UserSearchComponent} from './user/user-search/user-search.component';
import {RouterModule} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserFormComponent,
    UserSearchComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'user', redirectTo: 'user/search', pathMatch: 'full' },
      {path: 'user/form', component: UserFormComponent },
      {path: 'user/search', component: UserSearchComponent },
      {path: '', component: HomeComponent },
      {path: '**', redirectTo: '', pathMatch: 'full' },
    ]),
    SharedModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
