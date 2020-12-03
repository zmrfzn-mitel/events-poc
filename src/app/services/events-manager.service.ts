import { typeofExpr } from '@angular/compiler/src/output/output_ast';
import { Injectable, OnDestroy } from '@angular/core';
import { Subject, Observable, of, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ICuxEvent } from '../models/CuxEvent';



@Injectable({
  providedIn: 'root'
})

export class EventsManagerService implements OnDestroy {

  private messageBus:  Subject<ICuxEvent> = new Subject<ICuxEvent>();

  constructor() { }

  public send(evt: ICuxEvent) {
      console.log('sendEvent()\n id:', evt.identifier + '\n name:' + evt.type);
      this.messageBus.next(evt);
  }

  public listen(type: string): Observable<ICuxEvent> {
    console.log('listenEvent()=>',type);
    return this.messageBus.pipe(
      filter(event => event.type === type)
      );
  }

  ngOnDestroy() {
    console.log('onDestroy()');
    this.messageBus.complete();
  }


}



