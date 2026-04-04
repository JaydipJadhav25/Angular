import { Component, signal } from '@angular/core';
import { Bashbord } from "./bashbord/bashbord";
import { Input } from './input/input';
import { Conditions } from './conditions/conditions';
import { Signals } from './signals/signals';
import { Effets } from './effets/effets';

@Component({
  selector: 'app-root',
  imports: [Signals , Effets],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
 
   

}
