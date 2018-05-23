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
        timeStarts: ''
    };

    prixLoc: number;
    nbJour: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.car = navParams.get('car');
      this.user = navParams.get('user');

      var today = new Date();
      var day = today.getDate();
      var month = today.getMonth()+1;
      var year = today.getFullYear();

      this.event.timeStarts = year.toString() + "-" +  (month<10 ? "0" + month.toString(): month.toString()) + "-" + (day<10 ? "0" + day.toString(): day.toString());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
  }

    validLocation() {

        let jour = +this.nbJour;
        console.log("validation de la date");
        console.log("Jour = ", jour);
        let date = new Date();
        console.log("date du jour : ",date.getDate());
        date.setDate(date.getDate() + jour);
        console.log("date de fin avec jour",date);
    }

    calculPrix() {
       this.prixLoc = this.nbJour * this.car.prix;
    }
}
