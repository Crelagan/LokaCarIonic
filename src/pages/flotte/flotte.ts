import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CarDetailPage} from "../car-detail/car-detail";

/**
 * Generated class for the FlottePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flotte',
  templateUrl: 'flotte.html',
})
export class FlottePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlottePage');
  }

  itemSelected(){
      this.navCtrl.push(CarDetailPage, {});
  }
}
