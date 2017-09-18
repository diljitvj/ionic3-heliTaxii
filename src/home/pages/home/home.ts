import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {
    constructor(public menuCtrl: MenuController) {
    }
    ionViewDidLoad() {
        this.menuCtrl.enable(true, 'side-menu');
    }
}