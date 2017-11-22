import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { MemberSearchService } from './member-search.service';
import { member } from './member';

@Component({
  selector: 'member-search',
  templateUrl: './member-search.component.html',
  styleUrls: [ './member-search.component.css' ],
  providers: [MemberSearchService]
})

export class memberSearchComponent implements OnInit {
  members: Observable<member[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private memberSearchService: MemberSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
  this.members = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.memberSearchService.search(term)
        // or the observable of empty members if there was no search term
        : Observable.of<member[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<member[]>([]);
      });
  }

  gotoDetail(member: member): void {
    let link = ['/detail', member.id];
    this.router.navigate(link);
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/