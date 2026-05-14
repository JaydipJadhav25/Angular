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


export const routes: Routes = [
    {
        path: "dashbord",
        component: Dashbord,
        children: [
            { path: "profile", component: Profile },
            { path: "setting", component: Settening },
        ]
    },
    { path: '', redirectTo: '', pathMatch: 'full' }

]
