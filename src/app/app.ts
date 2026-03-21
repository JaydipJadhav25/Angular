import { Component, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Home } from "./home/home";
import { Footer } from "./footer/footer";
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Navbar, Home, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hello_angular');
  name = "jaydip";
 

  title2 = signal("angular interpolation!");


  getUser (){
    return "jaydip jadhav";
  }
 

}
