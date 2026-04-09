import { Component, signal } from '@angular/core';
import { Bashbord } from "./bashbord/bashbord";
import { Input } from './input/input';
import { Conditions } from './conditions/conditions';
import { Signals } from './signals/signals';
import { Effets } from './effets/effets';
import { Pipes } from './pipes/pipes';
import { ShortNamePipePipe } from './pipes/short-name-pipe-pipe';

@Component({
  selector: 'app-root',
  imports: [Pipes  , ShortNamePipePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullname = "jaydip jadhav";
 
   

}
