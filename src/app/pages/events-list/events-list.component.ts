import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Import Services
import { EventsService } from '../../services/events.service';
// Import Models
import { Events } from '../../domain/ng-rome_db/events';

// START - USED SERVICES
/**
* eventsService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* eventsService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Events
 * @class EventsListComponent
 */
@Component({
    selector: 'app-events-list',
    templateUrl: './events-list.component.html',
    styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
    list: Observable<any[]>;
    search: any = {};
    idSelected: string;
    constructor(
        private eventsService: EventsService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.list = this.eventsService.list();
    }

    /**
     * Select Events to remove
     *
     * @param {string} id Id of the Events to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Events
     */
    deleteItem() {
        this.eventsService.remove(this.idSelected);
    }

}
