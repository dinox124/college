import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {ViewChild} from '@angular/core';
import { CalendarComponent } from "ionic2-calendar/calendar";
import * as moment from 'moment';
/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();
  calendar = {
    mode: 'month',
    currentDate: new Date()
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }
 /* onEventSelected(event) {
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');
    
    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    })
    alert.present();
  }*/
  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
    this.eventSource=this.eventloaded();
  }
  today(){
    this.calendar.currentDate=new Date();
  }
  onViewTitleChanged(title){
    this.viewTitle=title;
  }
  eventloaded(){

          
    var events=[];
    events.push({
      title:'Happy Birthday pratheep anna',
      startTime:new Date('FRI Sep 13 2019 04:30:00 GMT +05:30 (IST)'),
      endTime:new Date('FRI Sep 13 2019 05:30:00 GMT +05:30 (IST)'),
      allDay:true
    });
    events.push({
      title:'happy news',
      startTime:new Date('FRI Jan 04 2019 13:30:00 GMT +05:30 (IST)'),
      endTime:new Date('FRI Jan 04 2019 14:30:00 GMT +05:30 (IST)'),
      allDay:false
    });
    events.push({
      title:'Exam no1',
      startTime:new Date('FRI Apr 20 2019 13:30:00 GMT +05:30 (IST)'),
      endTime:new Date('FRI Apr 20 2019 14:30:00 GMT +05:30 (IST)'),
      allDay:false
    });
    events.push({
      title:'II MSC CS Viva | 1 Day order',
      startTime:new Date('FRI Apr 08 2019 13:30:00 GMT +05:30 (IST)'),
      endTime:new Date('FRI Apr 08 2019 16:30:00 GMT +05:30 (IST)'),
      allDay:false
    });
    

return events;

  }

}
