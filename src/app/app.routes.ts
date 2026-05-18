// import { Routes } from '@angular/router';
// import { HomeComp } from './home-comp/home-comp';
// import { AboutComp } from './about-comp/about-comp';
// import { ContactComp } from './contact-comp/contact-comp';

// export const routes: Routes = [
//     {path :"", component : HomeComp},
//     {path :"about", component : AboutComp},
//     {path :"contact", component : ContactComp},
// ];





//nested routing
import { Routes } from "@angular/router";
import { Settening } from "./settening/settening";
import { Profile } from "./profile/profile";
import { Dashbord } from "./dashbord/dashbord";
import { Home } from "./home/home";
import { Admin } from "./admin/admin";
import { PageNotFound } from "./page-not-found/page-not-found";
import { authGuard } from "./auth-guard";
import { Login } from "./login/login";
import { canDeactivateGuard } from "./can-deactivete-guard";
import { ImpForm } from "./imp-form/imp-form";
import { App } from "./app";


export const routes: Routes = [
    {
        path: "dashbord",
        component: Dashbord,
        children: [
            { path: "profile", component: Profile},
            { path: "setting", component: Settening },
        ]
    },
    {
        path : "admin" ,
        loadComponent : () => import('./admin/admin').then( m => m.Admin),
        canActivate : [authGuard]
    },{
     path : "form" , component : ImpForm , 
     canDeactivate : [canDeactivateGuard]
    },
    {
        path : "home" , component : Home  ,
    },
    {
        path : "login" , component : Login
    },
    {
        path : "**" , component : PageNotFound
    }
    

]
