import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpserviceService {

  constructor(private http: Http) {
  }

  fetchUsers() {
    return this.http.get('/users.json').map(
      (res) => res.json()
    );
    /*return this.http.get('/users.json').subscribe(
     (data) => console.log(data)
     );*/
  }
}
