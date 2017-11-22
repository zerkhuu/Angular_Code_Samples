import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { member } from './member';
import { memberService } from './member.service';



@Component({
  selector: 'my-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'] 
})

export class membersComponent implements OnInit { 

  members: member[];
  selectedmember: member;
 
  constructor(private memberService: memberService, private router: Router) {} 

    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.memberService.create(name)
      .then(member => {
      this.members.push(member);
      this.selectedmember = null;
      });
    }
    

    delete(member: member): void {
      this.memberService
          .delete(member.id)
          .then(() => {
            this.members = this.members.filter(h => h !== member);
            if (this.selectedmember === member) { this.selectedmember = null; }
          });
    }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedmember.id]);
  }
  
  getmembers(): void {
    this.memberService.getmembers().then(members => this.members = members)
  }

  ngOnInit(): void {
    this.getmembers();
  }

  onSelect(member: member): void {
  this.selectedmember = member;
  }  
}







