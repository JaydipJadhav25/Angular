import { Component, computed, signal } from '@angular/core';
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

   //finde total depending on chnage
   total = computed<number>(()=> this.rollNo().length);


   doubleCount = computed<number>(() => this.count() * 2);
   tipleCount = computed<number>(() => this.count() * 3);



   incress(){
    this.count.set(this.count()+1);
   }

   first = signal<string>("jaydip");
   last = signal<string>("jadhav");

   fullName = computed<string>(()=>`${this.first()}  ${this.last()}`);











  

}
