import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjoutVoiturePage } from './ajout-voiture';

@NgModule({
  declarations: [
    AjoutVoiturePage,
  ],
  imports: [
    IonicPageModule.forChild(AjoutVoiturePage),
  ],
})
export class AjoutVoiturePageModule {}
