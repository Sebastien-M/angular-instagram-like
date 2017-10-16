import { Component, OnInit } from '@angular/core';
import {} from ''
import { UserService } from '../shared/user/user.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  conected=false;
  usernameInput:string;
  passwordInput:string;
  users:User[];
  
  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  connect(){
  let response = this.userService.getUsers().subscribe((response)=>{
    let userslength:number = Object.keys(response).length;
    for (let i = 0; i < userslength; i++) {
      if(this.usernameInput === response[i].username && this.passwordInput === response[i].password){
        this.conected = true;
        console.log("connected");
        
      }
      else{
        this.conected = false;
      }
      
    }
  });
  
  }
}
