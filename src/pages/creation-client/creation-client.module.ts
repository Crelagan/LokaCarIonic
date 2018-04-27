import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreationClientPage } from './creation-client';

@NgModule({
  declarations: [
    CreationClientPage,
  ],
  imports: [
    IonicPageModule.forChild(CreationClientPage),
  ],
})
export class CreationClientPageModule {}
