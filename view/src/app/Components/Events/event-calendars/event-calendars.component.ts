import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-calendars',
  templateUrl: './event-calendars.component.html',
  styleUrls: ['./event-calendars.component.css']
})
export class EventCalendarsComponent implements OnInit {
   Active_Tab = 'Today_Events';
  constructor() { }

  ngOnInit() {
  }
  Active_Tab_Change(name) {
   this.Active_Tab = name;
   }
}
