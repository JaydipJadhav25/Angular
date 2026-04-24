import { Component, input } from '@angular/core';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-cards',
  imports: [ɵEmptyOutletComponent],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {
   id = input();
  title = input<string>();
  disc = input<string>();
}
