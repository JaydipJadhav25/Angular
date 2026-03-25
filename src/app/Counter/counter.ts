import { Component } from "@angular/core";
import { Timer } from "../timer/timer";

@Component({
selector : 'app-counter',
templateUrl : './counter.html',
styleUrl : './counter.css',
imports: [Timer],
})


export class Counter{
 counter : number =0;
  type = "defult";

 //incress
 incress(){
     this.type = "incree";
    this.counter++;
 }
 decrees(){
    this.type = "dress";
    //do not make negative
    if (this.counter <=0) {
        this.counter = 0;
        
    }else{
        this.counter--;
    }
 }

 reset(){
    this.type = "defult"
    this.counter = 0;
 }


}