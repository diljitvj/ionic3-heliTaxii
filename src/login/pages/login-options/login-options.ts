import { Component } from '@angular/core';
import { NavController, LoadingController, MenuController } from 'ionic-angular';

import { LoginOtpPage } from '../login-otp/login-otp';
import { HomePage } from '../../../home/pages/home/home';

@Component({
  selector: 'page-login-options',
  templateUrl: 'login-options.html',
})
export class LoginOptionsPage {
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,
    public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(false, 'side-menu');
  }

  loginWithOtp() {
    this.navCtrl.push(LoginOtpPage);
  }

  loginWithFb() {
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
