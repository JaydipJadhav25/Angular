import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {
  name = "jaydip";
  surname = "JADHAV";
  today = new Date();
  price = 300000;
  val = 50;
  user = {
    name : 'jaydip',
    age : 20
  }
}
