import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICuxEvent, CuxEvent } from '../models/CuxEvent';
import { EventsManagerService } from '../services/events-manager.service';

@Component({
  selector: 'app-grand-child2',
  templateUrl: './grand-child2.component.html',
  styleUrls: ['./grand-child2.component.css']
})
export class GrandChild2Component implements OnInit,OnDestroy {

  subscriptions: Subscription[] = [];
  
  eventData: ICuxEvent = new CuxEvent('grand-child-2');
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
