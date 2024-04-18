import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //default path to cart API backend
  private apiUrl= environment.apiUrl + "/cart"
  private apiCheckoutUrl= environment.apiUrl + "/checkout"

  //dependecies injection to use httpclient
  constructor(private http: HttpClient) { }

  //send a product in the cart, return observable of type Product
  addToCart(product:Product):Observable<Product>{
    return this.http.post<Product>(this.apiUrl, product)
  }

  //get list of cart items, return obervable of type array of Product
  getCartItems(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl)
  }

  //delete cart content, return nothing
  clearCart():Observable<void>{
    return this.http.delete<void>(this.apiUrl)
  }

  //send cart to checkout, return void
  Checkout(products :Product[]):Observable<void>{
    return this.http.post<void>(this.apiCheckoutUrl, products)
  }
}
