import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { localKeys } from '../constants';

@Component({
  selector: 'app-display',
  templateUrl: './display.page.html',
  styleUrls: ['./display.page.scss'],
})
export class DisplayPage implements OnInit {

  name: any;
  sessionData: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.getDataFromSessionStorage();
  }

  getDataFromSessionStorage() {
    let sessionData: any = sessionStorage.getItem(localKeys.name);
    if(sessionData != null || sessionData != undefined) {
      this.sessionData = sessionData;
    }
    this.name = this.sessionData;
    console.log("sessionData: " + JSON.stringify(sessionData) + " name: " + this.name);
  }

  gotoHome() {
    this.router.navigate(['home']);
  }
}
