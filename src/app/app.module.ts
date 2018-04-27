import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FlottePage } from "../pages/flotte/flotte";
import { AjoutVoiturePage } from "../pages/ajout-voiture/ajout-voiture";
import { ClientPage } from "../pages/client/client";
import { CreationClientPage } from "../pages/creation-client/creation-client";
import { LocationPage } from "../pages/location/location";
import { UserDetailPage } from "../pages/user-detail/user-detail";
import { CarDetailPage } from "../pages/car-detail/car-detail";

import { HTTP } from "@ionic-native/http";
import { SQLite } from "@ionic-native/sqlite";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    FlottePage,
    AjoutVoiturePage,
    ClientPage,
    CreationClientPage,
    LocationPage,
    UserDetailPage,
    CarDetailPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    FlottePage,
    AjoutVoiturePage,
    ClientPage,
    CreationClientPage,
    LocationPage,
    UserDetailPage,
    CarDetailPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    HTTP,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
