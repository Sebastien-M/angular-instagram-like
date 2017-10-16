import {  Routes } from "@angular/router";
import { ConnexionComponent } from "./connexion/connexion.component";
import { AppComponent } from "./app.component";
export const appRoutes:Routes = [
    {path: 'connect', component:ConnexionComponent},
    {path: 'add', component:AppComponent},
    {path: '', pathMatch:'full', redirectTo:'/'},
]