import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  val  = 10;
  count = signal(20);


  increment(){
    this.count.update(c=>c+1);
  }
   decrement(){
    this.count.update(c=>c-1);
  }

   reset(){
    this.count.set(0);
  }
}
