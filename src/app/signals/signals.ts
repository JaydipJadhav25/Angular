import { Component, signal } from '@angular/core';
import { single } from 'rxjs';



interface IUser{
name : string ,
 age : number
}


@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})


export class Signals {
  val  = 10;
  count = signal<number>(20);
  name = signal<string>("jaydip");
  isVerify = signal<boolean>(false);

   rollNo = signal<number[]>([10 ,20 ,30, 40, 50]);

   user = signal<IUser[]>([
    {
    name : "jay",
    age : 20
   }
   ]);

   directSet(){
    this.rollNo.set([20 , 40 , 50]);
   }

   getVal(val : string){
     this.rollNo.update(num => [...num , Number(val)]);
   }




  

}
