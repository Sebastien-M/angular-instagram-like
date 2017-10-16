import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/of';
import { User } from '../user';

@Injectable()
export class UserService {
  private urlAPI:string = 'http://localhost:3000/users';
  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(this.urlAPI);
  }
}
