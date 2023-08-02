import { Component } from '@angular/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  static readonly api = {
    user: {
      retrieve: `${environment.backend}/user/retrieve?size=1000`,
    },
  };
  title = 'Angular Sample';
}
