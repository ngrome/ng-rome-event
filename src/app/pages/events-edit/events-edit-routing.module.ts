import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsEditComponent } from './events-edit.component';

const routes: Routes = [
  {
    path: '',
    component: EventsEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsEditRoutingModule { }
