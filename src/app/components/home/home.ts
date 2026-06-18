import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h1>Welcome to Our Store</h1>
    <p>Your one-stop shop for the best laptops, mobiles, and accessories.</p>
  `,
  styles: [`
    h1 { color: #333; }
    p { font-size: 1.2rem; color: #666; }
  `]
})
export class HomeComponent {}
