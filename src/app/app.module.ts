import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewsPage} from '../pages/news/news';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DepartmentPage } from '../pages/department/department'; 
import {NgCalendarModule} from 'ionic2-calendar';
import {CalendarPage} from '../pages/calendar/calendar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewsPage,
   CalendarPage,
    DepartmentPage,
    AboutPage,
    ContactPage,
   
  ],
  imports: [
    NgCalendarModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewsPage,
   CalendarPage,
    DepartmentPage,
    AboutPage,
    ContactPage,
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
