import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  name = signal("");
  email = signal("");
}
