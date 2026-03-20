import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hello_angular');
  name = "jaydip";
  counter = 0;
  isAdmin=true;
  count = 200;
  price = 120.300;
  isLogin = false;

  title2 = signal("angular interpolation!");


  getUser (){
    return "jaydip jadhav";
  }
 

}
