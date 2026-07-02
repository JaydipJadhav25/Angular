import { Component } from '@angular/core';

@Component({
  selector: 'app-conditions',
  imports: [],
  templateUrl: './conditions.html',
  styleUrl: './conditions.css',
})
export class Conditions {
  isYes = true
   number = 0;
   order = "pending";
   tab : string = 'home';

   incress(){
    this.number++;
   };

  toggalYes(){
    this.isYes = !this.isYes;
  }
}
