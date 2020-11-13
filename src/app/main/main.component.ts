import { Component, OnInit } from '@angular/core';
import { EventsManagerService } from '../services/events-manager.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private evtSvc: EventsManagerService){}

  compPaths = [
    {path: '', name : 'Home'},
    {path: 'simple', name : 'Simple Event'},
    {path: 'child-parent', name : 'Child to Parent'},
    {path: 'shared-multi-instance', name : 'Component with multiple Instances'},
  ];

  ngOnInit() {}

}
