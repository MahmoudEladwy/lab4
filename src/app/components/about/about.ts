import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <h1>About Us</h1>
    <p>We are a leading retailer of electronics with over 10 years of experience.</p>
  `,
  styles: [`
    h1 { color: #333; }
    p { font-size: 1.2rem; color: #666; }
  `]
})
export class AboutComponent {}
