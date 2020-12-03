import { Component, Input, OnInit } from '@angular/core';
import { ICuxEvent, CuxEvent } from 'src/app/models/CuxEvent';
import { EventsManagerService } from 'src/app/services/events-manager.service';

@Component({
  selector: 'app-child-parent',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
@Input() eventName: string;
childEvent: ICuxEvent;

  constructor(private evtSvc: EventsManagerService) { }

  ngOnInit() {
    this.childEvent = new CuxEvent(this.eventName);

  }

  fireEvent() {
    this.childEvent.eventData = this.eventName;
    this.evtSvc.send(this.childEvent);
  }

}
