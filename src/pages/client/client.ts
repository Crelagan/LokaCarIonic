import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserDetailPage} from "../user-detail/user-detail";

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import {userModel} from "../../model/user.model";
import {CreationClientPage} from "../creation-client/creation-client";
import {LocationPage} from "../location/location";

/**
 * Generated class for the ClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

const DATABASE_FILE_NAME: string = 'lokacar.db';

@IonicPage()
@Component({
  selector: 'page-client',
  templateUrl: 'client.html',
})
export class ClientPage {

  userTemp : userModel = new userModel();
  private db: SQLiteObject;
  users: userModel[] = [];
  isUser: boolean;
  isLoc: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite) {
    this.isUser = false;
    this.getClients();
    this.isLoc = this.navParams.get("isLoc");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientPage');
  }

  itemSelected(user: userModel){
      if(this.isLoc)
      {
          this.navCtrl.push(LocationPage, {
              user: user,
              car: this.navParams.get("car")
          })
      }else{
          this.navCtrl.push(UserDetailPage, {
              user: user
          });
      }

  }

  redirect() {
      this.navCtrl.push(CreationClientPage, {});
  }


  private getClients(): void {
      this.sqlite.create({
          name: DATABASE_FILE_NAME,
          location: 'default'
      })
          .then((db: SQLiteObject) => {
              console.log('Bdd recuperé pour liste !');
              this.db = db;
              this.users = [];
              this.db.executeSql('SELECT * FROM `Client`', {})
                  .then((data) => {
                      if(data == null) {
                          this.isUser = false;
                          return;
                      }

                      if(data.rows) {
                          if(data.rows.length > 0) {
                              this.isUser = true;
                              for(var i = 0; i < data.rows.length; i++) {
                                  console.log("User Recuperer : " + data.rows.length + "Item n° " + i + "User : " + data.rows.item(i));
                                  this.users.push(data.rows.item(i));
                              }
                              console.log(this.users.length);
                          }
                      }
                  });
          })
          .catch(e => console.log(e));
  }
}
