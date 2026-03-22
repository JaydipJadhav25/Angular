import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  counter = 0;
  incress(){
    this.counter++;
  };
  decreement(){
    if (this.counter <= 0) {
      this.counter =0;
      return;
    }
    this.counter--;
  }


}
