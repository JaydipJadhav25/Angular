import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  lable = input<string>();
  // clickFunction = output<void>();
  clickFunction = output<string>();

  onClick() {
    alert(`this is button comp!`);
    this.clickFunction.emit('this is button comp!');
  }

}
