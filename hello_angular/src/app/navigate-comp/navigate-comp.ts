import { Component } from '@angular/core';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-navigate-comp',
  imports: [],
  templateUrl: './navigate-comp.html',
  styleUrl: './navigate-comp.css',
})
export class NavigateComp {
  //create object od router
  constructor(private router : Router){}


  navigate(){
    this.router.navigate(['demopage'])
  }
  

}
