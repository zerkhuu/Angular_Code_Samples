import { Component, OnInit } from '@angular/core';
import { member } from './member';
import { memberService } from './member.service';

@Component ({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    
    members: member[] = [];

    constructor(private memberService: memberService) { }
    
    ngOnInit(): void {
        this.memberService.getmembers()
      .then(members => this.members = members.slice(0, 6));
    }
}