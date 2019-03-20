import { Injectable } from '@angular/core';
import {CanActivate,ActivatedRouteSnapshot,Router , ActivatedRoute} from '@angular/router';
import {EventService} from '../shared/event.service'

@Injectable()
export class EventRouteActivator implements CanActivate {

  constructor(private eventService : EventService,
              private router : Router,
              private activatedRoute : ActivatedRoute
    ){

  }

  canActivate(route:ActivatedRouteSnapshot){
    let event_id = route.params['id']

    const eventExists = !!this.eventService.getEvent(+event_id);
    if (!eventExists){
      this.router.navigate(['404']);
    }
    return eventExists;
  }
}
