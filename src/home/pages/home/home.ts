import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';
import { RideNowPage } from '../../../booking/pages/ride-now/ride-now';
import { RideLaterPage } from '../../../booking/pages/ride-later/ride-later';
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {
    constructor(public menuCtrl: MenuController,
        public navCtrl: NavController) {
    }
    ionViewDidLoad() {
        this.menuCtrl.enable(true, 'side-menu');
    }
    rideNow() {
        this.navCtrl.push(RideNowPage, {}, {
            animation: 'wp-transition'
        });
    }
    rideLater() {
        this.navCtrl.push(RideLaterPage);
    }
}