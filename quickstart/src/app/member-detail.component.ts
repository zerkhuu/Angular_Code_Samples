import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Location } from '@angular/common';
import { memberService } from './member.service'
import { member } from './member';
import { fOptions } from './form.options'
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'member-detail',
     templateUrl: './member-detail.component.html',
    styleUrls: ['./member-detail.component.css']
})

export class memberDetailComponent implements OnInit {
    member: member;
    public myForm: FormGroup;
    ReadyOptions = [new fOptions('Yes'), new fOptions('No')];
    StatusOptions =[new fOptions('Active'), new fOptions('Inactive'), new fOptions('PUG') ];
    GuardianOptions = [new fOptions('Titan'), new fOptions('Hunter'), new fOptions('Warlock')];

    constructor(
        private memberService: memberService,
        private route: ActivatedRoute,
        private location: Location,
        private _fb: FormBuilder
      ) {}
    
    ngOnInit(): void {
         this.route.paramMap
    .switchMap((params: ParamMap) => this.memberService.getmember(+params.get('id')))
    .subscribe(member => this.member = member);
    }
    
    goBack(): void {
        this.location.back();
    }

    save(): void {
        if(this.member.name.length < 1){ alert("Name is required.")}
        else{
        this.memberService.update(this.member)
          .then(() => this.goBack());
        }
      }

    
    }

