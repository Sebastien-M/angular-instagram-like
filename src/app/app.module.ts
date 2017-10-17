import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { UserService } from './shared/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.route';
import { APP_BASE_HREF } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './shared/post/post.service';
import { AddpostComponent } from './addpost/addpost.component';
import { AuthService } from './shared/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    PostsComponent,
    AddpostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    UserService,
    PostService,
    { provide: APP_BASE_HREF, useValue: '/' },
    AuthService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
