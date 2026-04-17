import { Component, signal } from '@angular/core';
import { Bashbord } from "./bashbord/bashbord";
import { Input } from './input/input';
import { Conditions } from './conditions/conditions';
import { Signals } from './signals/signals';
import { Effets } from './effets/effets';
import { Pipes } from './pipes/pipes';
import { ShortNamePipePipe } from './pipes/short-name-pipe-pipe';
import { ConvertPipePipe } from './pipes/convert-pipe-pipe';
import { CommonModule } from '@angular/common';
import { Twowaybinding } from './twowaybinding/twowaybinding';
import { TodoApp } from './todo-app/todo-app';

@Component({
  selector: 'app-root',
  imports: [ TodoApp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

 
   

}
