import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {locationModel} from "../../model/location.model";
import {carModel} from "../../model/car.model";
import {userModel} from "../../model/user.model";

/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {

    car: carModel;
    location: locationModel;

    user: userModel;

    public event = {
        timeStarts: '',
        timeEnds: '2018-05-05'
    };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.car = navParams.get('car');
      this.user = navParams.get('user');

      var today = new Date();
      var day = today.getDate();
      var month = today.getMonth()+1;
      var year = today.getFullYear();
      var dayEnd = day+1;

      this.event.timeStarts = year.toString() + "-" +  (month<10 ? "0" + month.toString(): month.toString()) + "-" + (day<10 ? "0" + day.toString(): day.toString());
      this.event.timeEnds = year.toString() + "-" +  (month<10 ? "0" + month.toString(): month.toString()) + "-" + (dayEnd<10 ? "0" + dayEnd.toString(): dayEnd.toString());

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
  }

    validLocation() {
        console.log(this.event.timeStarts);
    }
}
