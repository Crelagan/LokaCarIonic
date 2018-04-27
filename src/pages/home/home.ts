import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

const DATABASE_FILE_NAME: string = 'lokacar.db';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  log: boolean;
  private db: SQLiteObject;

  constructor(public navCtrl: NavController, public sqlite: SQLite) {
    this.log = true;
    this.createDatabaseFile();
  }

    private createDatabaseFile(): void {
        this.sqlite.create({
            name: DATABASE_FILE_NAME,
            location: 'default'
        })
            .then((db: SQLiteObject) => {
                console.log('Bdd créée !');
                this.db = db;
                this.createTables();
            })
            .catch(e => console.log(e));
    }

    private createTables(): void {
        this.db.executeSql('CREATE TABLE IF NOT EXISTS `Client` ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `nom` TEXT NOT NULL, `prenom` TEXT NOT NULL, `telephone` TEXT NOT NULL, `mail` TEXT NOT NULL, `permis` INTEGER )', {})
            .then(() => {
                console.log('Table Movies created !');

                this.db.executeSql('CREATE TABLE IF NOT EXISTS `Voiture` ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `marque` TEXT NOT NULL, `modele` TEXT NOT NULL, `carburant` TEXT NOT NULL, `Prix` NUMERIC NOT NULL, `Etat` TEXT NOT NULL DEFAULT \'Disponible\' )', {})
                    .then(() => console.log('Table Categories created !'))
                    .catch(e => console.log(e));
            })
            .catch(e => console.log(e));
    }

}
