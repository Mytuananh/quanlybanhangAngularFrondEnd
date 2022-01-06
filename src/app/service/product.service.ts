import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {Product} from '../model/Product';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
//API_SERVE
  API_PRODUCT = environment.API_SERVE+'products';
  constructor(private http: HttpClient) { }

  createProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.API_PRODUCT, product);
  }
  listProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(this.API_PRODUCT+'/list')
  }
  detailsProduct(id: number):Observable<Product>{
    return this.http.get<Product>(this.API_PRODUCT+'/'+id);
  }
  updateProduct(id: number, product: Product):Observable<Product>{
    return this.http.put<Product>(this.API_PRODUCT+'/'+id, product);
  }
  deleteProductById(id: number):Observable<Product>{
    return this.http.delete<Product>(this.API_PRODUCT+'/'+id);
  }
}
