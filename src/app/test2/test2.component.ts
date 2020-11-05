import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CuxEvent, ICuxEvent } from '../models/CuxEvent';
import {  EventsManagerService } from '../services/events-manager.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit, OnDestroy {
@Input() inputData: any = 'default';

subscriptions: Subscription[] = [];

  eventData: ICuxEvent = new CuxEvent('test2-child');
  constructor(private evtSvc: EventsManagerService) { }

  ngOnInit() {

  }

  fireEventChild(evt) {
    this.eventData.event = evt;
    this.evtSvc.sendEvent(this.eventData);
  }

  ngOnDestroy() {
    console.log('destroying subs');
    this.subscriptions.forEach(subs => subs.unsubscribe());
  }

}
