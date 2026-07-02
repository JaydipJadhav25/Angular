import { Component, input  , Output , EventEmitter, signal} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
 @Output() notify = new EventEmitter<string>();


 sendtoParent(){
  this.notify.emit("hello from child compoents : this is old way")
 }

//  using signals

 message = signal("this is old message fro child")

 updateMessage(){
  this.message.set("this is new message from child compoenets");
 }



}
