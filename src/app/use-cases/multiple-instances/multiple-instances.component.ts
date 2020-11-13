import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventsManagerService } from 'src/app/services/events-manager.service';

@Component({
  selector: 'app-multiple-instances',
  templateUrl: './multiple-instances.component.html',
  styleUrls: ['./multiple-instances.component.scss']
})
export class MultipleInstancesComponent implements OnInit, OnDestroy {

  events = [
    { name: 'first', eventOutput: undefined },
    { name: 'second', eventOutput: undefined },
    { name: 'third', eventOutput: undefined }
  ];
  eventOutput: string;

  subscriptions: Subscription[] = [];
  constructor(private evtSvc: EventsManagerService) { }

  ngOnInit() {
    this.subscriptions.push(
      this.evtSvc.listenEvent(this.events[0].name).subscribe(evt => {
        this.events[0].eventOutput = evt.eventData;
      }),
      this.evtSvc.listenEvent(this.events[1].name).subscribe(evt => {
        this.events[1].eventOutput = evt.eventData;
      }),
      this.evtSvc.listenEvent(this.events[2].name).subscribe(evt => {
        this.events[2].eventOutput = evt.eventData;
      })
    );
  }


  clearEvent() {
    this.events.forEach(evt => { evt.eventOutput = undefined; });
  }

  ngOnDestroy() {
    console.log('clearing subscriptions');
    this.subscriptions.forEach(subs => subs.unsubscribe());
  }
}
