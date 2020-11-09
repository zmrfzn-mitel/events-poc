import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CuxEvent, ICuxEvent } from '../models/CuxEvent';
import { EventsManagerService } from '../services/events-manager.service';


@Component({
  selector: 'app-test1',
  templateUrl: './child.component.html',
  styleUrls: ['./test1.component.scss']
})
export class childComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  eventData: ICuxEvent = new CuxEvent('child');

  constructor(private evtSvc: EventsManagerService) { }

  data = { prop1: 'abc', prop2: 'xyz' };
  ngOnInit() {

    this.subscriptions.push(
      this.evtSvc.listenEvent('grand-child-1').subscribe(event => {
      console.log('=> event received in childComponent  from', event);

    })
    );
  }

  fireEvent() {
    this.eventData.event = this.data;
    this.evtSvc.sendEvent(this.eventData); //@output 
  }

  ngOnDestroy() {
    console.log('destroying subs');
    this.subscriptions.forEach(subs => subs.unsubscribe());
  }
}
