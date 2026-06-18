import { Injectable } from '@angular/core';
import { IProduct } from '../common/IProduct';
import { ICategory } from '../common/ICategory';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private CategoryList: ICategory[] = [
    { ID: 1, Name: 'Laptops' },
    { ID: 2, Name: 'Mobiles' },
    { ID: 3, Name: 'Accessories' }
  ];

  private ProductList: IProduct[] = [
    {
      ID: 1,
      Name: 'Dell Latitude Laptop',
      Quantity: 10,
      Price: 25000,
      Img: 'https://placehold.co/300x200?text=Dell+Laptop',
      CategoryID: 1,
      Description: 'High-performance laptop for professionals'
    },
    {
      ID: 2,
      Name: 'HP EliteBook',
      Quantity: 2,
      Price: 30000,
      Img: 'https://placehold.co/300x200?text=HP+EliteBook',
      CategoryID: 1,
      Description: 'Premium business laptop with excellent build quality'
    },
    {
      ID: 3,
      Name: 'IPhone 15 Pro Max',
      Quantity: 1,
      Price: 65000,
      Img: 'https://placehold.co/300x200?text=iPhone+15',
      CategoryID: 2,
      Description: 'Latest iPhone with advanced camera system'
    },
    {
      ID: 4,
      Name: 'Samsung S25 Ultra',
      Quantity: 0,
      Price: 55000,
      Img: 'https://placehold.co/300x200?text=Samsung+S25',
      CategoryID: 2,
      Description: 'Flagship Android smartphone with stunning display'
    },
    {
      ID: 5,
      Name: 'Wireless Mouse',
      Quantity: 15,
      Price: 800,
      Img: 'https://placehold.co/300x200?text=Wireless+Mouse',
      CategoryID: 3,
      Description: 'Ergonomic wireless mouse for comfortable computing'
    }
  ];

  getCategories(): ICategory[] {
    return this.CategoryList;
  }

  getAllProducts(): IProduct[] {
    return this.ProductList;
  }

  getProductsByCatID(catID: number): IProduct[] {
    if (catID === 0) return this.ProductList;
    return this.ProductList.filter(p => p.CategoryID === catID);
  }

  getProductByID(prodID: number): IProduct | undefined {
    return this.ProductList.find(p => p.ID === prodID);
  }
}
