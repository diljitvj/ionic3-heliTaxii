import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../../../home/pages/home/home';

@Component({
    selector: 'page-history',
    templateUrl: 'history.html',
})
export class HistoryPage {
    constructor(public navCtrl: NavController) {

    }
    goToHome() {
        this.navCtrl.setRoot(HomePage);
    }
}