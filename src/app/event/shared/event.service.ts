import {Injectable} from '@angular/core';
import {EventConstants} from '../event-list-data';

@Injectable()
export class EventService {
  public eventConstants;
  public eventsData : any;
  constructor() {
    this.eventConstants = new EventConstants();
    this.eventsData = this.eventConstants.events;
  }

  getAllEvents() {

  }

  getEvent(eventId:number) {
    return this.eventsData.find(eachEvent => eachEvent.id === eventId);
  }
}
