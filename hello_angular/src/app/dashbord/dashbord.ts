import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  imports: [RouterOutlet , RouterLink],
  templateUrl: './dashbord.html',
  styleUrl: './dashbord.css',
})
export class Dashbord {}
