import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CuxEvent, ICuxEvent } from 'src/app/models/CuxEvent';
import { EventsManagerService } from 'src/app/services/events-manager.service';

@Component({
  selector: 'app-simple-event',
  templateUrl: './simple-event.component.html',
  styleUrls: ['./simple-event.component.scss']
})
export class SimpleEventComponent implements OnInit, OnDestroy {

  eventName = 'simpleEvent';
  eventOutput: string;
  event: ICuxEvent = new CuxEvent(this.eventName);

  subscriptions: Subscription[] = [];
  constructor(private evtSvc: EventsManagerService) { }

  ngOnInit() {
    this.subscriptions.push(
      this.evtSvc.listenEvent(this.eventName).subscribe(evt => {
        this.eventOutput = evt.eventData;
      })
    );
  }

  fireEvent() {
    this.event.eventData = 'Simple Event Data';
    this.evtSvc.sendEvent(this.event);
  }
  clearEvent() {
    this.eventOutput = undefined;
  }

  ngOnDestroy() {
    console.log('clearing subscriptions');
    this.subscriptions.forEach(subs => subs.unsubscribe());
  }
}
