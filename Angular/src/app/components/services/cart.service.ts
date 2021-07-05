import { Injectable } from '@angular/core';
import {Product} from "../../model/Product";
import {ServiceService} from "../../service.service";
import {listProducts} from "../../model/ListProducts";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  product: Product | undefined;
  constructor(
    private service: ServiceService
  ) { }
  items:any[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  addToCartById(id:string|undefined){
    this.service.getProductById(id).subscribe(pro => this.product = pro)
    this.items.push(this.product);
  }
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }


}
