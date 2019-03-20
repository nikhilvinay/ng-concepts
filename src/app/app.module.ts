import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import { EventComponent } from './event/event.component';
import { EventThumbnailComponent } from './event/event-thumbnail/event-thumbnail.component';
import {EventListComponent} from './event/event-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
// import {ToasterService} from './shared-service';
import {ToastrService} from './common/toastr.service';
import {EventService} from './event/shared/event.service';
import {EventDetailComponent} from './event/event-detail/event-detail-component';
import {appRoutes} from './route';
import {Error404Component} from './error/error404.component';
import {EventRouteActivator} from './event/event-detail/event-route-activator.service';
@NgModule({
  declarations: [
    EventsAppComponent,
    EventComponent,
    EventThumbnailComponent,
    EventListComponent,
    NavBarComponent,
    EventDetailComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ToastrService,EventService,EventRouteActivator],
  bootstrap: [EventsAppComponent]
})

export class AppModule { }
