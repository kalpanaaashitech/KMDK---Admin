import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { MembersListComponent } from './Components/Members/members-list/members-list.component';
import { MembersApprovalComponent } from './Components/Members/members-approval/members-approval.component';
import { OfficialsListComponent } from './Components/Officials/officials-list/officials-list.component';
import { EventCalendarsComponent } from './Components/Events/event-calendars/event-calendars.component';


const appRoutes: Routes = [
   {
      path: 'Members_List',
      component: MembersListComponent,
      data: { animation: { value: 'Members_List'}  }
   },
   {
      path: 'Members_Approval',
      component: MembersApprovalComponent,
      data: { animation: { value: 'Members_Approval'}  }
   },
   {
      path: 'Officials_List',
      component: OfficialsListComponent,
      data: { animation: { value: 'Officials_List'}  }
   },
   {
      path: 'Event_Calendar',
      component: EventCalendarsComponent,
      data: { animation: { value: 'Event_Calendar'}  }
   }
];

@NgModule({
   declarations: [ ],
   imports: [ RouterModule.forRoot(appRoutes,
       { enableTracing: true }
     )],
   providers: [],
   bootstrap: []
 })
 export class AppRoutingModule { }
