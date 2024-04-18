import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  cartItems : Product[]= []
  totalPrice: number = 0

  constructor(private cartService: CartService){}
  //do stuff at the initialization
  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(data =>{
      this.cartItems = data
      this.totalPrice = this.getTotalPrice()
    })
  }

  getTotalPrice(): number{
    let total =0;
    for(let item of this.cartItems){
      total += item.price
    }
    return total
  }

  //call clear methode from cart.service
  clearCart(): void{
    this.cartService.clearCart().subscribe();
  }

  //call checkout methode from cart.service
  checkout():void{
    this.cartService.Checkout(this.cartItems).subscribe();
  }
}
