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
import { Parent } from './parent/parent';
import { Counterstore } from './core/store/counter';
import { Userstore } from './core/store/user';
import { Form } from './form/form';
import { Form2 } from './form2/form2';

@Component({
  selector: 'app-root',
  imports: [ Form  , Form2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
