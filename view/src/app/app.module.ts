import { BrowserModule,  } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing.module';

import {MatButtonModule, MatMenuModule} from '@angular/material';


import { MembersListComponent } from './Components/Members/members-list/members-list.component';
import { MembersApprovalComponent } from './Components/Members/members-approval/members-approval.component';
import { OfficialsListComponent } from './Components/Officials/officials-list/officials-list.component';
import { EventCalendarsComponent } from './Components/Events/event-calendars/event-calendars.component';


@NgModule({
  declarations: [
    AppComponent,
    MembersListComponent,
    MembersApprovalComponent,
    OfficialsListComponent,
    EventCalendarsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
