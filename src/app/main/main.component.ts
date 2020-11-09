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
    {path: 'child', name : 'child'},
    {path: 'grandchild-1', name : 'grand-child-1'},
    {path: 'grandchild-2', name : 'grand-child-2'},
  ]

  ngOnInit() {
   
  }

}
