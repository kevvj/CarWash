import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<h1>Hola {{sujeto}}</h1>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  sujeto = 'angular';
}
