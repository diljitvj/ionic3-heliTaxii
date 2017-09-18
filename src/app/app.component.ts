import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginOptionsPage } from '../login/pages/login-options/login-options';
import { HomePage } from '../home/pages/home/home';
import { SettingsPage } from '../settings/pages/settings/settings';
import { HistoryPage } from '../history/pages/history/history';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginOptionsPage;
  @ViewChild('nav') nav: NavController;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  logOut() {
    this.menuCtrl.close();
    this.nav.setRoot(LoginOptionsPage, {}, { animate: true, direction: 'back' });
  }
  bookNow() {
    this.menuCtrl.close();
    this.nav.setRoot(HomePage);
  }
  goToHistory() {
    this.menuCtrl.close();
    this.nav.setRoot(HistoryPage);
  }
  goToSettings() {
    this.menuCtrl.close();
    this.nav.setRoot(SettingsPage);
  }
}

