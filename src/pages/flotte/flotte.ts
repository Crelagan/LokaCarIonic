import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CarDetailPage} from "../car-detail/car-detail";
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";
import {carModel} from "../../model/car.model";
import {AjoutVoiturePage} from "../ajout-voiture/ajout-voiture";

const DATABASE_FILE_NAME: string = 'lokacar.db';

@IonicPage()
@Component({
  selector: 'page-flotte',
  templateUrl: 'flotte.html',
})
export class FlottePage {

    carTemp : carModel = new carModel();
    private db: SQLiteObject;
    cars: carModel[] = [];
    isCar: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite) {
      console.log("Flotte constructor");
      this.isCar = false;
      this.getCars();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlottePage');
  }

  redirect(){
      this.navCtrl.push(AjoutVoiturePage, {});
  }

  itemSelected(){
      this.navCtrl.push(CarDetailPage, {});
  }

    private getCars(): void {
        this.sqlite.create({
            name: DATABASE_FILE_NAME,
            location: 'default'
        })
            .then((db: SQLiteObject) => {
                console.log('Bdd recuperé pour liste !');
                this.db = db;
                this.cars = [];
                this.db.executeSql('SELECT * FROM `Voiture`', {})
                    .then((data) => {
                        if(data == null) {
                            this.isCar = false;
                            return;
                        }

                        if(data.rows) {
                            if(data.rows.length > 0) {
                                this.isCar = true;
                                for(var i = 0; i < data.rows.length; i++) {
                                    console.log("Car Recuperer : " + data.rows.length + "Item n° " + i + "User : " + data.rows.item(i));
                                    this.cars.push(data.rows.item(i));
                                }
                                console.log(this.cars.length);
                            }
                        }
                    });
            })
            .catch(e => console.log(e));
    }

}
