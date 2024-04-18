import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = environment.apiUrl + "/products"
  constructor(private http: HttpClient) { }

  //fetch the full array of Products
  getProducts():Observable<Product[]>{
    //send get request to apiUrl
    return this.http.get<Product[]>(this.apiUrl)
  }
}
