import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from "./child/child";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
//  constructor(){
//   console.log("1. OnCreation!");
//  }
  
 counter = signal<number>(0);
 isShow = signal(true);

 //update counter
 addCounter(){
  this.counter.update(val => val + 1);
 }

 //reset
 reset(){
  this.counter.set(0);
 }
 //hide
 toggel(){
  this.isShow.update(val => !val);
 }


}
