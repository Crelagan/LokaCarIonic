import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import {ClientPage} from "../client/client";


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
  userAdresse: string;
  userVille: string;
  userCodePostal: string;

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
              this.db.executeSql('INSERT INTO `Client` (nom,prenom,mail,telephone,permis,adresse,codePostal,ville) VALUES(\'' + this.userNom + '\',\'' + this.userPrenom+ '\',\'' + this.userMail + '\',\''+ this.userTel + '\',\'' + this.userPermis + '\',\''+ this.userAdresse +'\',\'' + this.userCodePostal + '\',\'' + this.userVille + '\' )', {})
                  .then(() => {
                    console.log('User inserted !');
                    this.navCtrl.push(ClientPage);
                  })
                  .catch(e => console.log(e.message));
          })
          .catch(e => console.log(e.message));
  }
}
