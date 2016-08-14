import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class HttpserviceService {

  constructor(private http: Http) {
  }

  fetchUsers() {
    return this.http.get('/users.json').subscribe(
      (data) => console.log(data)
    );
  }
}
