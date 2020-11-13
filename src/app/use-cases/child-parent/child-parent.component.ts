import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICuxEvent, CuxEvent } from 'src/app/models/CuxEvent';
import { EventsManagerService } from 'src/app/services/events-manager.service';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-parent.component.html',
  styleUrls: ['./child-parent.component.scss']
})
export class ChildParentComponent implements OnInit, OnDestroy {

  eventName = 'child-to-parent';
  eventOutput: string;

  subscriptions: Subscription[] = [];
  constructor(private evtSvc: EventsManagerService) { }

  ngOnInit() {
    this.subscriptions.push(
      this.evtSvc.listenEvent(this.eventName).subscribe(evt => {
        this.eventOutput = evt.eventData;
      })
    );
  }


  clearEvent() {
    this.eventOutput = undefined;
  }

  ngOnDestroy() {
    console.log('clearing subscriptions');
    this.subscriptions.forEach(subs => subs.unsubscribe());
  }
}
