import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
 
import 'rxjs/add/operator/toPromise';
 
import { member } from './member';
 
@Injectable()
export class memberService {
 
  private headers = new Headers({'Content-Type': 'application/json'});
  private membersUrl = 'api/members';  // URL to web api
 
  constructor(private http: Http) { }
 
  getmembers(): Promise<member[]> {
    return this.http.get(this.membersUrl)
               .toPromise()
               .then(response => response.json().data as member[])
               .catch(this.handleError);
  }
 
  getmember(id: number): Promise<member> {
    const url = `${this.membersUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as member)
      .catch(this.handleError);
  }
 
  delete(id: number): Promise<void> {
    const url = `${this.membersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
 
  create(name: string): Promise<member> {
    return this.http
      .post(this.membersUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as member)
      .catch(this.handleError);
  }
 
  update(member: member): Promise<member> {
    const url = `${this.membersUrl}/${member.id}`;
    return this.http
      .put(url, JSON.stringify(member), {headers: this.headers})
      .toPromise()
      .then(() => member)
      .catch(this.handleError);
  }
 
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}