import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  isMulti = false;
  multiEvent = [
    {name: 'first',output:undefined},
    {name: 'second',output:undefined}
  ];

  subscriptions: Subscription[] = [];

  constructor(private evtSvc: EventsManagerService,
    private route: ActivatedRoute) {
      if(this.route.snapshot.params['isMulti']) {
        this.isMulti = true;
      }
     }

  ngOnInit() {
    if(!this.isMulti){
    this.subscriptions.push(
      this.evtSvc.listen(this.eventName).subscribe(evt => {
        this.eventOutput = evt.eventData;
      })
    );
  }
  if(this.isMulti){
    this.subscriptions.push(
      this.evtSvc.listen(this.multiEvent[0].name).subscribe(evt => {
        this.multiEvent[0].output = evt.eventData;
      }),
      this.evtSvc.listen(this.multiEvent[1].name).subscribe(evt => {
        this.multiEvent[1].output = evt.eventData;
      })
    );
  }
  }


  clearEvent() {
    this.eventOutput = undefined;
    this.multiEvent.forEach(event => event.output = undefined);
  }

  ngOnDestroy() {
    console.log('clearing subscriptions');
    this.subscriptions.forEach(subs => subs.unsubscribe());
  }
}
