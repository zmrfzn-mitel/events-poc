import { Component, Input, OnInit } from '@angular/core';
import { ICuxEvent, CuxEvent } from 'src/app/models/CuxEvent';
import { EventsManagerService } from 'src/app/services/events-manager.service';

@Component({
  selector: 'app-multiple-events',
  templateUrl: './multiple-events.component.html',
  styleUrls: ['./multiple-events.component.scss']
})
export class MultipleEventsComponent implements OnInit {
@Input() eventName1: string;
@Input() eventName2: string;

childEvent1: ICuxEvent;
childEvent2: ICuxEvent;

  constructor(private evtSvc: EventsManagerService) { }

  ngOnInit() {
    this.childEvent1 = new CuxEvent(this.eventName1);
    this.childEvent2 = new CuxEvent(this.eventName2);

  }

  fireEvent() {
    this.childEvent1.eventData = this.eventName1;
    this.childEvent2.eventData = this.eventName2;
    this.evtSvc.sendEvent(this.childEvent1);
    this.evtSvc.sendEvent(this.childEvent2);
  }

}
