import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-twowaybinding',
  imports: [FormsModule],
  templateUrl: './twowaybinding.html',
  styleUrl: './twowaybinding.css',
})
export class Twowaybinding {
  name = "jaydip";
  username = signal("jaydya@4513")

  user = signal<{name : string , age : number}>({
    name : "ram" , age : 20
  })


  updateUser(key : string ,val : string){
         this.user.update(prev => ({...prev , [key]:val}))
  }
}
