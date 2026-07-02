import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-demopage',
  imports: [],
  templateUrl: './demopage.html',
  styleUrl: './demopage.css',
})
export class Demopage {
  constructor(private router : Router){}

  openProduct(){
    this.router.navigate(['product', 1000]);
  }

  //use fix url
  back(){
    this.router.navigateByUrl('/')
  }

}
