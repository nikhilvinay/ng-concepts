import { Component, OnInit } from '@angular/core';
import {EventConstants} from './event-list-data'
import {Router} from '@angular/router';
@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event.component.css']
})

export class EventListComponent implements OnInit {
  public eventData : any;
  private eventConstants = new EventConstants();
  constructor(private router : Router) {
      this.eventData = this.eventConstants.events;
    }

  ngOnInit() {
  }
  handleClickeEvent(child_data : any){
    console.log(child_data);
    this.router.navigate(['/events',child_data.id])

  }

}
