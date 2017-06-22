import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MessageService {
  public apiUrl = 'https://ng2-cable-example.herokuapp.com';

  constructor(private http: Http) {
  }

  query(page:any) {
    return this.http.get(`${this.apiUrl}/api/v1/messages?page=${page}`).map(res => {
      return res.json();
    });
  }

  create(message:any) {
    return this.http.post(`${this.apiUrl}/api/v1/messages`, message).map(res => {
      return res.json();
    });
  }
}
