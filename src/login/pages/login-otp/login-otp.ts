import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { HomePage } from '../../../home/pages/home/home';

@Component({
    selector: 'page-login-otp',
    templateUrl: 'login-otp.html',
})
export class LoginOtpPage {
    public stage = 1;
    public phoneNumber: number;
    constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

    }
    goBack() {
        switch (this.stage) {
            case 1:
                this.navCtrl.pop();
                break;
            case 2:
                this.stage--;
                break;
        }
    }

    requestForOtp() {
        this.stage++;
    }
    VerifyOtpAndLogin() {
        const loading = this.loadingCtrl.create({
            content: 'Logging you in'
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
            this.navCtrl.setRoot(HomePage);
        }, 500)
    }
}
