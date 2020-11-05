import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CuxEvent, ICuxEvent } from '../models/CuxEvent';
import {  EventsManagerService } from '../services/events-manager.service';
import { Test2Component } from '../test2/test2.component';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  eventData: ICuxEvent = new CuxEvent('test1');
  constructor(private evtSvc: EventsManagerService) { }

   data = {prop1: 'abc', prop2: 'xyz'};
  ngOnInit() {

    this.subscriptions.push(this.evtSvc.listenEvent('test2-child').subscribe(event => {
      console.log('event received', event);
    }));
  }
  
  fireEvent() {
    this.eventData.event = this.data;
    this.evtSvc.sendEvent(this.eventData);
  }

  ngOnDestroy() {
    console.log('destroying subs');
    this.subscriptions.forEach(subs => subs.unsubscribe());
  }
}
