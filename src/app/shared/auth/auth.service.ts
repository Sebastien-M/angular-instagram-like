import { Injectable, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class AuthService implements OnInit{
  result;
  urlApi = "http://localhost:3000/users?";

  user:BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private http:HttpClient) { 
    this.user.next(JSON.parse(localStorage.getItem("user")));
  }

  ngOnInit() {
    
  }

  login(username:string,pass:string):Observable<boolean> {
    
    return this.http.get<User[]>(this.urlApi+'username='+username+'&password='+pass)
    .map((users) => {
      if(users.length === 1) {
        localStorage.setItem("user",JSON.stringify(users[0]));
        this.user.next(users[0]);
        return true;
      }
      return false;
    });
  }

  logout():void {
    localStorage.removeItem("user");
    this.user.next(null);
  }

}
