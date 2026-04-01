import { Component, signal } from '@angular/core';
import { Bashbord } from "./bashbord/bashbord";
import { Input } from './input/input';
import { Conditions } from './conditions/conditions';
import { Signals } from './signals/signals';

@Component({
  selector: 'app-root',
  imports: [Signals],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
 
   

}
