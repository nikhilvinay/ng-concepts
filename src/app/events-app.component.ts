import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
              <router-outlet></router-outlet>
            `,
  styleUrls: ['./events-app.component.css']
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
