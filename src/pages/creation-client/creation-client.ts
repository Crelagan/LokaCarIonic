import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import {ClientPage} from "../client/client";

/**
 * Generated class for the CreationClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

const DATABASE_FILE_NAME: string = 'lokacar.db';

@IonicPage()
@Component({
  selector: 'page-creation-client',
  templateUrl: 'creation-client.html',
})
export class CreationClientPage {

  private db: SQLiteObject;
  userNom: string;
  userPrenom: string;
  userTel: string;
  userMail: string;
  userPermis: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreationClientPage');
  }

  public saveClient() {
      this.sqlite.create({
          name: DATABASE_FILE_NAME,
          location: 'default'
      })
          .then((db: SQLiteObject) => {
              console.log('Bdd recuperer !');
              this.db = db;
              this.db.executeSql('INSERT INTO `Client` (nom,prenom,telephone,mail,permis) VALUES(\'' + this.userNom + '\',\'' + this.userPrenom+ '\',\'' + this.userTel + '\',\'' + this.userMail + '\',' + this.userPermis + ' )', {})
                  .then(() => {
                    console.log('User inserted !');
                    this.navCtrl.push(ClientPage);
                  })
                  .catch(e => console.log(e));
          })
          .catch(e => console.log(e));
  }
}
