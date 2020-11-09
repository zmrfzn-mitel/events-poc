import { Component, OnInit } from '@angular/core';
import { EventsManagerService } from './services/events-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  name = 'Angular';

  constructor(private evtSvc: EventsManagerService) { }

  ngOnInit() {

    this.evtSvc.listenEvent('child').subscribe(evt => {
      console.log('=> event received in AppComponent  from', evt);
    });
    this.evtSvc.listenEvent('grand-child-2').subscribe(evt => {
      console.log('=> event received in AppComponent  from', evt);
    });


  }
}
