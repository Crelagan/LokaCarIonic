import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";
import {FlottePage} from "../flotte/flotte";


const DATABASE_FILE_NAME: string = 'lokacar.db';

@IonicPage()
@Component({
  selector: 'page-ajout-voiture',
  templateUrl: 'ajout-voiture.html',
})
export class AjoutVoiturePage {

  private db: SQLiteObject;
  carModel: string;
  carMarque: string;
  carPrix: number;
  carCarburant: string;
  carEtat: string;
  carBoite: string;
  carImmat: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutVoiturePage');
  }

    public saveVoiture() {
        this.sqlite.create({
            name: DATABASE_FILE_NAME,
            location: 'default'
        })
            .then((db: SQLiteObject) => {
                console.log('Bdd recuperer !');
                this.db = db;
                this.db.executeSql('INSERT INTO `Voiture` (marque,modele,carburant,boite,immat,prix,etat) VALUES(\'' + this.carMarque + '\',\'' + this.carModel + '\',\'' + this.carCarburant + '\',\''+ this.carBoite +'\',\''+ this.carImmat +'\',\'' + this.carPrix + '\',\'' + this.carEtat + '\' )', {})
                    .then(() => {
                        console.log('Car inserted !');
                        this.navCtrl.push(FlottePage);
                    })
                    .catch(e => console.log(e.message));
            })
            .catch(e => console.log(e.message));
    }
}
