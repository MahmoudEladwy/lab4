import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { ICategory } from '../../common/ICategory';
import { IProduct } from '../../common/IProduct';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.html',
  styleUrls: ['./product.css']
})
export class ProductComponent {

  searchText: string = '';
  selectedCategory: number = 0;

  CategoryList: ICategory[];
  ProductList: IProduct[];

  constructor(private productsService: ProductsService, private router: Router) {
    this.CategoryList = this.productsService.getCategories();
    this.ProductList = this.productsService.getAllProducts();
  }

  buyProduct(product: IProduct) {
    if (product.Quantity > 0) {
      product.Quantity--;
    }
  }

  showDetails(productId: number) {
    this.router.navigate(['/products', productId]).then(() => {
      console.log('Navigation completed to product details');
    });
  }

  get filteredProducts() {
    return this.ProductList.filter(product => {

      const matchName =
        product.Name.toLowerCase()
          .includes(this.searchText.toLowerCase());

      const matchCategory =
        this.selectedCategory == 0 ||
        product.CategoryID == this.selectedCategory;

      return matchName && matchCategory;
    });
  }
}
