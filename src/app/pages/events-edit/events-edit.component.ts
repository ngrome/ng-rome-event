// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Import Services
import { EventsService } from '../../services/events.service';

import { Events } from '../../domain/ng-rome_db/events';

// START - USED SERVICES
/**
* eventsService.create
*	@description CRUD ACTION create
*
* eventsService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* eventsService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a  Events
 */
@Component({
    selector: 'app-events-edit',
    templateUrl: 'events-edit.component.html',
    styleUrls: ['events-edit.component.css']
})
export class EventsEditComponent implements OnInit {
    item: any = {};
    itemDoc: AngularFirestoreDocument<Events>;
    isNew: Boolean = true;
    formValid: Boolean;



    constructor(
        private eventsService: EventsService,
        private route: ActivatedRoute,
        private location: Location) {
        // Init list
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.isNew = false;
                this.itemDoc = this.eventsService.get(id);
                this.itemDoc.valueChanges().subscribe(item => this.item = item);

            }
            // Get relations
        });
    }



    /**
     * Save Events
     *
     * @param {boolean} formValid Form validity check
     * @param Events item Events to save
     */
    save(formValid: boolean): void {
        this.formValid = formValid;
        if (formValid) {
            if (this.isNew) {
                // Create
                this.eventsService.create(this.item);
                this.isNew = false;
            } else {
                // Update
                this.eventsService.update(this.itemDoc, this.item);
            }
            this.goBack();
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }

}
