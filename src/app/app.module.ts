import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { childComponent } from './child/child.component';
import { GrandChild1Component } from './grand-child1/grand-child1.component';
import { GrandChild2Component } from './grand-child2/grand-child2.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [					
    AppComponent,
    childComponent,
      GrandChild1Component,
      GrandChild2Component,
      MainComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
