import { Component, signal } from '@angular/core';
import { Bashbord } from "./bashbord/bashbord";
import { Input } from './input/input';
import { Conditions } from './conditions/conditions';
import { Signals } from './signals/signals';
import { Effets } from './effets/effets';
import { Pipes } from './pipes/pipes';

@Component({
  selector: 'app-root',
  imports: [Pipes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
 
   

}
