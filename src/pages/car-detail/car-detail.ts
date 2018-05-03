import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {carModel} from "../../model/car.model";
import {ClientPage} from "../client/client";

/**
 * Generated class for the CarDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-car-detail',
  templateUrl: 'car-detail.html',
})
export class CarDetailPage {

  car: carModel;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.car = navParams.get('car');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarDetailPage');
  }

  locationControl() {
      this.navCtrl.push(ClientPage, {
          car: this.car,
          isLoc: true
      });
  }
}
