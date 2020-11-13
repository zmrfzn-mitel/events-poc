import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';
import { SimpleEventComponent } from './use-cases/simple-event/simple-event.component';
import { ChildParentComponent } from './use-cases/child-parent/child-parent.component';
import { ChildComponent } from './use-cases/child-parent/child/child.component';
import { MultipleInstancesComponent } from './use-cases/multiple-instances/multiple-instances.component';
import { MultipleEventsComponent } from './use-cases/multiple-events/multiple-events.component';

@NgModule({
  declarations: [
    AppComponent,

    MainComponent,

    SimpleEventComponent,

    ChildParentComponent,

    ChildComponent,

    MultipleInstancesComponent,

    MultipleEventsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
