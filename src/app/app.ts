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
import { Cards } from './cards/cards';
import { Button } from './button/button';

const items = [
  {
    id: 1,
    title: "Project Alpha",
    description: "Initial planning phase for the new client website."
  },
  {
    id: 2,
    title: "Market Research",
    description: "Analyzing competitor trends in the tech sector."
  },
  {
    id: 3,
    title: "API Integration",
    description: "Connecting the frontend app to the main backend server."
  },
  {
    id: 4,
    title: "User Testing",
    description: "Gathering feedback from beta users on mobile UI."
  },
  {
    id: 5,
    title: "Final Deployment",
    description: "Deploying the product to the live production environment."
  }
];

// Example of accessing the data
console.log(items[0].title); // Outputs: "Project Alpha"


@Component({
  selector: 'app-root',
  imports: [Cards ,Button],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  data = items;
  message = "";
  onSave(msg : string){
    console.log(msg);
    this.message = msg;
  }
}
