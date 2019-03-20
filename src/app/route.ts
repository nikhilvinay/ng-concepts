import {EventListComponent} from './event/event-list.component';
import {EventDetailComponent} from './event/event-detail/event-detail-component';
import {Routes} from '@angular/router';
import { Error404Component } from './error/error404.component';
import {EventRouteActivator} from './event/event-detail/event-route-activator.service';

export const appRoutes:Routes = [
  {path : 'events' , component :EventListComponent},
  {path : 'events/:id' , component :EventDetailComponent ,
   canActivate:[EventRouteActivator]},
  {path : '404' , component :Error404Component},
  {path : '' , redirectTo : '/events' , pathMatch:'full'}
];
