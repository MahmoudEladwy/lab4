import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <a routerLink="/home">Go back to Home</a>
  `,
  styles: [`
    h1 { color: #d9534f; }
    a { color: #007bff; cursor: pointer; }
  `]
})
export class NotFoundComponent {}
