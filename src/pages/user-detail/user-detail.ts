import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {userModel} from "../../model/user.model";
import {ClientPage} from "../client/client";
import {FlottePage} from "../flotte/flotte";

/**
 * Generated class for the UserDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html',
})
export class UserDetailPage {

  user: userModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get("user");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailPage');
  }

  locationControl() {
      this.navCtrl.push(FlottePage, {
          user: this.user,
          isLoc: true
      });
  }

}
