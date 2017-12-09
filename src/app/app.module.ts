import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MateriPage } from '../pages/materi/materi';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AwalPage } from '../pages/awal/awal';
import { MateriPageModule } from '../pages/materi/materi.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AwalPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    MateriPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AwalPage,
    MateriPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
