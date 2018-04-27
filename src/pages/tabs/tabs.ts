import {Component} from '@angular/core';

import {FlottePage} from "../flotte/flotte";
import {ClientPage} from "../client/client";
import {CreationClientPage} from "../creation-client/creation-client";
import {AjoutVoiturePage} from "../ajout-voiture/ajout-voiture";
import {HomePage} from "../home/home";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FlottePage;
  tab3Root = ClientPage;
  tab4Root = AjoutVoiturePage;
  tab5Root = CreationClientPage;

  constructor() {

  }
}
