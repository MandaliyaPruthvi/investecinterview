import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { localKeys } from '../constants';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  name: any = '';
  showStateData: boolean = false;
  sessionData: any;
  buttonClicked: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  saveData() {
    console.log("name value: " + this.name);
    if (this.name) {
      this.buttonClicked = true;
      this.storeIntoSessionStorage(this.name);
      this.showStateData = true;
    }
  }

  storeIntoSessionStorage(value) {
    sessionStorage.setItem(localKeys.name, value);
    this.navigateToDisplay();
  }

  navigateToDisplay() {
    setTimeout(() => {
      this.router.navigate(['/display']);
    }, 5000);
  }

  getDataFromSessionStorage() {
    let sessionData: any = sessionStorage.getItem(localKeys.name);
    if(sessionData != null || sessionData != undefined) {
      this.sessionData = sessionData;
      this.showStateData = true;
    }
    this.name = this.sessionData;
    console.log("sessionData: " + JSON.stringify(sessionData) + " name: " + this.name);
  }

  ionViewWillEnter() {
    this.getDataFromSessionStorage();
  }

  ionViewDidLeave() {
    this.buttonClicked = false;
  }
}
