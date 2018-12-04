import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './events-list.component';
import { EventsListRoutingModule } from './events-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    EventsListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    EventsListComponent
  ]
})
export class EventsListModule { }
