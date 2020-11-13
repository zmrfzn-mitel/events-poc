import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';
import { ChildParentComponent } from './use-cases/child-parent/child-parent.component';
import { SimpleEventComponent } from './use-cases/simple-event/simple-event.component';


const routes: Routes = [
{path:'simple', component:SimpleEventComponent},
{path:'child-parent', component:ChildParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
