import { Component } from '@angular/core';

@Component({
  selector: 'app-bashbord',
  imports: [],
  templateUrl: './bashbord.html',
  styleUrl: './bashbord.css',
})
export class Bashbord {

   input : string = "";

   buttonClick(){
    console.log("click!...");
   }

   hoverEffect(){
    console.log("hover effect!....");
    // alert("mouse hover effect")
   }

   blueEffect(){
    console.log("blue effect....!");
   }

   inputEffect(val : string){
    console.log(val);
    this.input = val;
   }

   onkeyup(event : any){
    console.log(event.key)
   }

}
