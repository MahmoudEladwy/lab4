import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { ContactUsComponent } from './components/contact/contact';
import { ProductComponent } from './components/product/product';
import { ProductDetailsComponent } from './components/product-details/product-details';
import { NotFoundComponent } from './components/not-found/not-found';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'products', component: ProductComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];
