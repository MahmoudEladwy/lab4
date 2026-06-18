import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <h1>Contact Us</h1>
    <p>Email: support@store.com</p>
    <p>Phone: +20 123 456 7890</p>
  `,
  styles: [`
    h1 { color: #333; }
    p { font-size: 1.2rem; color: #666; }
  `]
})
export class ContactUsComponent {}
