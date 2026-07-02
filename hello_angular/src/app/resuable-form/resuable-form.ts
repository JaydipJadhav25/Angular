import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-resuable-form',
  imports: [],
  templateUrl: './resuable-form.html',
  styleUrl: './resuable-form.css',
})
export class ResuableForm {
  lable = input<string>();
  type = input();
  // value = input();
  placeholder = input<string>();
  valueChnage = output<string>();

  // this is event function
  onInput(value : string){
    console.log("value from child comp: ", value);
    this.valueChnage.emit(value);
  }

  
}
