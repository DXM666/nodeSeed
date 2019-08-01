/**
 * Created by author on time
 */

import { Component, OnInit } from '@angular/core';

import { tempService } from '../services/temp.service';

@Component({
    selector: 'temp',
    templateUrl: './temp.component.html'
})
export class tempComponent implements OnInit {

    message: string;

    constructor(
        private tempSvc: tempService
    ) { }

    ngOnInit() {
        this.message = this.tempSvc.say();
    }

}
