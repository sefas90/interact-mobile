import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from "@ngx-translate/core";

import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              public translate: TranslateService) {
    platform.ready().then(() => {
      this.initTranslate();
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  initTranslate() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
