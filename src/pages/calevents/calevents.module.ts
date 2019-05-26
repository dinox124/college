import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaleventsPage } from './calevents';

@NgModule({
  declarations: [
    CaleventsPage,
  ],
  imports: [
    IonicPageModule.forChild(CaleventsPage),
  ],
})
export class CaleventsPageModule {}
