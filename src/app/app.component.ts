import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Sample';

  static readonly api = {
    user: {
      retrieve: `api/user/retrieve`,
      create: `api/user/create`,
    },
  };
}
