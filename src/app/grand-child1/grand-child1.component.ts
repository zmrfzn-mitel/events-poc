import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICuxEvent, CuxEvent } from '../models/CuxEvent';
import { EventsManagerService } from '../services/events-manager.service';

@Component({
  selector: 'app-grand-child1',
  templateUrl: './grand-child1.component.html',
  styleUrls: ['./grand-child1.component.css']
})
export class GrandChild1Component implements OnInit, OnDestroy {

  @Input() inputData: any = 'default';

  subscriptions: Subscription[] = [];
  
    eventData: ICuxEvent = new CuxEvent('grand-child-1');
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
