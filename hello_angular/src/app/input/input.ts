import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input {
  name : string = "";
  email : string = "";
  city = "";
  setInput(val : string){
     this.name = val
  }
  getCity(val : string){
    this.city = val;
  }
}
