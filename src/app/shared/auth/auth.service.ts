import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class AuthService {
  result;
  urlApi = "http://localhost:3000/users?";
  user:BehaviorSubject<User> = new BehaviorSubject(null);
  constructor(private http:HttpClient) { }

  login(username:string,pass:string):Observable<boolean> {
    
    return this.http.get<User[]>(this.urlApi+'username='+username+'&password='+pass)
    .map((users) => {
      if(users.length === 1) {
        this.user.next(users[0]);
        return true;
      }
      return false;
    });
  }

  logout():void {
    this.user.next(null);
  }

}
