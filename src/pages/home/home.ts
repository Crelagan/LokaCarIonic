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
    console.log("In constructor");
    this.log = true;
    this.createDatabaseFile();
  }

    private createDatabaseFile(): void {
        console.log("creation de la base");
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
        this.db.executeSql('CREATE TABLE IF NOT EXISTS `Client` ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `nom` TEXT NOT NULL, `prenom` TEXT NOT NULL, `mail` TEXT NOT NULL, `telephone` INTEGER NOT NULL, `permis` INTEGER NOT NULL, `adresse` TEXT NOT NULL, `codePostal` INTEGER NOT NULL, `ville` TEXT NOT NULL )', {})
            .then(() => {
                console.log('Table Client created !');
                this.db.executeSql('CREATE TABLE IF NOT EXISTS `Voiture` ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `marque` TEXT NOT NULL, `modele` TEXT NOT NULL, `carburant` TEXT NOT NULL, `boite` TEXT NOT NULL, `immat` TEXT NOT NULL, `prix` INTEGER NOT NULL, `etat` TEXT NOT NULL )', {})
                    .then(() => {
                        console.log('Table Voiture created !');
                        this.db.executeSql('CREATE TABLE "StatVoiture" ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `idVoiture` INTEGER, `nbLoc` INTEGER NOT NULL, `chiffreAffaire` INTEGER NOT NULL, FOREIGN KEY(`idVoiture`) REFERENCES `Voiture`(`id`) )', {})
                            .then(() => {
                                console.log('Table StatVoiture created !');
                                this.db.executeSql('CREATE TABLE `Location` ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `idVoiture` INTEGER, `idClient` INTEGER, `dateDebut` TEXT NOT NULL, `datefin` TEXT NOT NULL, `prix` TEXT NOT NULL, `etat` TEXT, FOREIGN KEY(`idClient`) REFERENCES `Client`(`id`), FOREIGN KEY(`idVoiture`) REFERENCES `Voiture`(`id`) )', {})
                                    .then(() => console.log('Table Location created !'))
                                    .catch(e => console.log(e));
                            })
                            .catch(e => console.log(e));
                    })
                    .catch(e => console.log(e));
            })
            .catch(e => console.log(e));
    }

    deleteVoiture(){
      this.db.executeSql('DROP TABLE `Voiture`',{})
          .then(() => console.log('Table Vehicule erased !'))
            this.db.executeSql('CREATE TABLE `Voiture` ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `marque` TEXT NOT NULL, `modele` TEXT NOT NULL, `carburant` TEXT NOT NULL, `boite` TEXT NOT NULL, `immat` TEXT NOT NULL, `prix` INTEGER NOT NULL, `etat` TEXT NOT NULL )', {})
            .then(() => console.log('Table Voiture created !'))
            .catch(e => console.log(e));
    }

    deleteUser(){
      this.db.executeSql('DROP TABLE `Client`',{})
        .then(() => console.log('Table Client erased !'))
        this.db.executeSql('CREATE TABLE `Client` ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `nom` TEXT NOT NULL, `prenom` TEXT NOT NULL, `mail` TEXT NOT NULL, `telephone` INTEGER NOT NULL, `permis` INTEGER NOT NULL, `adresse` TEXT NOT NULL, `codePostal` INTEGER NOT NULL, `ville` TEXT NOT NULL )', {})
            .then(() => console.log('Table Voiture created !'))
            .catch(e => console.log(e));
    }



}
