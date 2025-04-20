import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { ProductsComponent } from './page/products/products.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'products', component: ProductsComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
