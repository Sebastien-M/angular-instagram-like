import {  Routes } from "@angular/router";
import { ConnexionComponent } from "./connexion/connexion.component";
import { AppComponent } from "./app.component";
import { PostsComponent } from "./posts/posts.component";
import { AddpostComponent } from "./addpost/addpost.component";
export const appRoutes:Routes = [
    {path: 'connect', component:ConnexionComponent},
    {path: 'add', component:AddpostComponent},
    {path: "",component:PostsComponent},
    {path: '', pathMatch:'full', redirectTo:'/'},
]