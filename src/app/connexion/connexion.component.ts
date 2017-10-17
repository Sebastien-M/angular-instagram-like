import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user/user.service';
import { User } from '../shared/user';
import { AuthService } from '../shared/auth/auth.service';

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
  
  constructor(private userService:UserService, private authService:AuthService) { }

  ngOnInit() {
  }

  connect(){
    // console.log(this.authService.user);
    this.authService.login(this.usernameInput,this.passwordInput).subscribe((result)=>{
      console.log(result);
    });
  }
}
