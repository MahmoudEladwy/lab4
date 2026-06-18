import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../common/IProduct';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="product; else notFound">
      <h1>{{ product.Name }}</h1>
      <img [src]="product.Img" alt="{{ product.Name }}" style="max-width: 300px;">
      <p><strong>Price:</strong> {{ product.Price | currency:'USD' }}</p>
      <p><strong>Quantity:</strong> {{ product.Quantity }}</p>
      <p><strong>Description:</strong> {{ product.Description }}</p>
      <p><strong>Category ID:</strong> {{ product.CategoryID }}</p>
    </div>
    <ng-template #notFound>
      <h2>Product not found</h2>
    </ng-template>
  `,
  styles: [`
    img { border-radius: 8px; margin: 10px 0; }
    h1 { color: #333; }
    p { font-size: 1.1rem; color: #555; }
  `]
})
export class ProductDetailsComponent {
  product: IProduct | undefined;

  constructor() {
    const route = inject(ActivatedRoute);
    const productsService = inject(ProductsService);

    route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.product = productsService.getProductByID(id);
    });
  }
}
