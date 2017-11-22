import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
 
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
import { member }           from './member';
 
@Injectable()
export class MemberSearchService {
 
  constructor(private http: Http) {}
 
  search(term: string): Observable<member[]> {
    return this.http
               .get(`api/members/?name=${term}`)
               .map(response => response.json().data as member[]);
  }
}