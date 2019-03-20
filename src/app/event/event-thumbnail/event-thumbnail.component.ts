import { Component, OnInit , Input, Output , EventEmitter } from '@angular/core';
import {ToastrService} from '../../common/toastr.service';
import {Router} from '@angular/router';
@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event_data : any;
  @Output() out_event_data = new EventEmitter();

  constructor(private toastrService : ToastrService,
    private router : Router) {

  }

  ngOnInit() {
  }

  handleClickeEvent(){
    this.out_event_data.emit(this.event_data);
  }

  accessPublicMethodInParent(){
    console.log(this.event_data);
  }
  displayNameInToaster(){
    this.router.navigate(['/events',this.event_data.id])
  }
}
