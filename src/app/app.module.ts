import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { LoginOptionsPage } from '../login/pages/login-options/login-options';
import { LoginOtpPage } from '../login/pages/login-otp/login-otp';
import { HomePage } from '../home/pages/home/home';
import { RideNowPage } from '../booking/pages/ride-now/ride-now';
import { RideLaterPage } from '../booking/pages/ride-later/ride-later';
import { HistoryPage } from '../history/pages/history/history';
import { SettingsPage } from '../settings/pages/settings/settings';

@NgModule({
  declarations: [
    MyApp,
    LoginOptionsPage,
    LoginOtpPage,
    HomePage,
    RideNowPage,
    RideLaterPage,
    HistoryPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginOptionsPage,
    LoginOtpPage,
    HomePage,
    RideNowPage,
    RideLaterPage,
    HistoryPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
