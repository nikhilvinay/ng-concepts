import {Component,OnInit } from '@angular/core';
import {EventService} from '../shared/event.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  templateUrl:'./event-detail-component.html'
})

export class EventDetailComponent implements OnInit {
  public event : any;
  constructor(private eventService : EventService,
      private activatedRoute : ActivatedRoute
    ){
  }

  ngOnInit(){
    console.log(this.activatedRoute.snapshot.params['id']);
    let event_id = this.activatedRoute.snapshot.params['id']
    this.event = this.eventService.getEvent(parseInt(event_id));
    console.log(this.event);
  }

}
