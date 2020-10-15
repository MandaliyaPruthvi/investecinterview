import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Device } from '@ionic-native/device/ngx';
import { localKeys } from '../app/constants';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  isPlatform: any = '';
  isEmulator: any = '';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private device: Device,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.getDeviceInformation();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  getDeviceInformation() {
    this.isEmulator = this.device.isVirtual
    this.isPlatform = this.device.platform;
    this.storeInfoIntoLocal(this.isEmulator, this.isPlatform);
  }

  storeInfoIntoLocal(emulator, platform) {
    if ((emulator == false || emulator == true) && platform) {
      sessionStorage.setItem(localKeys.deviceInfo , JSON.stringify({ emulator: this.isEmulator, device: this.isPlatform}));
    }
  }
}
