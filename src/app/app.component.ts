import { Component, OnInit } from '@angular/core';
import { EventsManagerService } from './services/events-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private evtSvc: EventsManagerService) { }
  name = 'Angular';

  interfaceSnippet = `
  export interface ICuxEvent {
    identifier?: string;
    type: string;
    eventData: any;
  }
  `;

  ngOnInit() { }
}
