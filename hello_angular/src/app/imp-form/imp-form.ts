import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-imp-form',
  imports: [RouterLink],
  templateUrl: './imp-form.html',
  styleUrl: './imp-form.css',
})
export class ImpForm {
  canDeactivate(){
     return confirm("do you want to leav?");
  }
}
