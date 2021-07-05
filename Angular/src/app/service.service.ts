import { Injectable } from '@angular/core';
import {listProducts} from "./model/ListProducts";
import {Product} from "./model/Product";

import {Observable} from "rxjs";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  // getProduct():Product[]{
  //   return listProducts;
  // }

  getProduct():Observable<Product[]>{
    return of(listProducts)
  }

  getProductById(id: string | undefined):Observable<Product | undefined>{
    return of(listProducts.find(product => product.id === id));
  }
  constructor() { }
}
