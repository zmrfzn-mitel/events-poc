import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { childComponent } from './child/child.component';
import { GrandChild1Component } from './grand-child1/grand-child1.component';
import { GrandChild2Component } from './grand-child2/grand-child2.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'child', component: childComponent},
  {path: 'grandchild-1', component: GrandChild1Component},
  {path: 'grandchild-2', component: GrandChild2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
