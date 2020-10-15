import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
// import { Device } from '@ionic-native/device/ngx';
import { Unlocker } from '../../app/components/unlocker/unlocker.component'


@NgModule({
  imports: [
    // Device,
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, Unlocker]
})
export class HomePageModule {}
