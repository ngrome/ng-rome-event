import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsEditComponent } from './events-edit.component';
import { EventsEditRoutingModule } from './events-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    EventsEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    EventsEditComponent
  ]
})
export class EventsEditModule { }
