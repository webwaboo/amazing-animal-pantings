import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { CartViewComponent } from './cart/cart-view/cart-view.component';

const routes: Routes = [
  {path: '', redirectTo: '/product', pathMatch:'full'},
  {path: 'product', component: ProductListComponent},
  {path:'cart', component: CartViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
