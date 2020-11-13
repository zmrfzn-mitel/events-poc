import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';
import { ChildParentComponent } from './use-cases/child-parent/child-parent.component';
import { MultipleEventsComponent } from './use-cases/multiple-events/multiple-events.component';
import { MultipleInstancesComponent } from './use-cases/multiple-instances/multiple-instances.component';
import { SimpleEventComponent } from './use-cases/simple-event/simple-event.component';


const routes: Routes = [
{path:'simple', component:SimpleEventComponent},
{path:'child-parent', component:ChildParentComponent},
{path: 'shared-multi-instance', component:MultipleInstancesComponent},
{path: 'child-parent/:isMulti', component:ChildParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
