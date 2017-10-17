import { Component } from '@angular/core';
import { AuthService } from './shared/auth/auth.service';
import { User } from './shared/user';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user;

  constructor(private authservice: AuthService) {
  }

  ngOnInit() {
    this.user = this.authservice.user;
  }

  logout() {
    this.authservice.logout();
  }

  show() {
    this.user.subscribe((resp) => {
      console.log(resp);
    });
  }

}
