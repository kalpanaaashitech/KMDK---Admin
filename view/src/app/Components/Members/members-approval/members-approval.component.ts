import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members-approval',
  templateUrl: './members-approval.component.html',
  styleUrls: ['./members-approval.component.css']
})
export class MembersApprovalComponent implements OnInit {
   Active_Tab = 'add_events';
  constructor() { }

  ngOnInit() {
  }
  Active_Tab_Change(name) {
   this.Active_Tab = name;
   }
}
