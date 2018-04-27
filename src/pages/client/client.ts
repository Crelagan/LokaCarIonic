import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserDetailPage} from "../user-detail/user-detail";

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

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

  private db: SQLiteObject;
  users: string[] = [];
  isUser: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite) {
    this.isUser = false;
    this.getClients();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientPage');
  }

  itemSelected(){
      this.navCtrl.push(UserDetailPage, {});
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
                                  this.users.push(data.rows.item(i).name);
                              }
                          }
                      }
                  });
          })
          .catch(e => console.log(e));
  }

}
