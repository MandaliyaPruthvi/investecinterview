import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from '@ionic-native/device/ngx';
import { localKeys } from '../constants';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isPlatform: any = '';
  isEmulator: any = '';
  deviceinfo: any;
  name: any;
  sessionData: any;
  unlocked = false;

  constructor(private device: Device, private router: Router) {
    this.getDataFromLocal();
  }

  getDataFromLocal() {
    let deviceinfo = sessionStorage.getItem(localKeys.deviceInfo);
    this.deviceinfo = JSON.parse(deviceinfo);
    this.isEmulator = this.deviceinfo.emulator
    this.isPlatform = this.deviceinfo.device;
  }

  getDataFromSessionStorage() {
    let sessionData: any = sessionStorage.getItem(localKeys.name);
    if(sessionData != null || sessionData != undefined) {
      this.sessionData = sessionData;
    }
    this.name = this.sessionData;
    console.log("sessionData: " + JSON.stringify(sessionData) + " name: " + this.name);
  }

  ionViewWillEnter() {
    this.getDataFromSessionStorage();
  }

  unlockedHandler(event: boolean) {
    console.log(event);
    this.unlocked = event;
  }

  goto(page) {
    if(page) {
      this.router.navigate(['/' + page]);
    }
  }
}
