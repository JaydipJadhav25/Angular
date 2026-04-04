import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effets',
  imports: [],
  templateUrl: './effets.html',
  styleUrl: './effets.css',
})
export class Effets {
  couter = signal(0);
   isDark = signal(false);
     val = 10;
   message = signal("");

//  constructor(){
//    console.log("construtor call!");
//    effect(()=>{
//     //  const btn = document.getElementsByTagName("button");
//      console.log("counter value : " , this.isDark());
//     if (this.isDark()) {
//       document.body.style.backgroundColor ="black"
//       document.body.style.color ="orange"
 
//     }else{
//       document.body.style.backgroundColor ="white"
//       document.body.style.color ="black"
//     }
//   })
//  }

 //toggle
 toggle(){
  this.isDark.update(preve => !preve);

 }




 constructor(){
  effect(()=>{
    console.log("chnage vaiable!" , this.val);
  })


  effect(()=>{
    console.log("chnage vaiable!" , this.couter());
  })

  effect(()=>{
    if (this.message()) {
      setTimeout(()=>{
          this.message.set("");
      },3000)
    }
  });


 }


 addMessage(){
  this.message.set("jaydip jadhav")
 }




  incress(){
    // this.couter.update(c => c+1);
    this.val++;
  }

  incressCon(){
     this.couter.update(c => c+1);

  }

 




}
