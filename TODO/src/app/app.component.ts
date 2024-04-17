import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayToDoComponent } from './components/display-to-do/display-to-do.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DisplayToDoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
