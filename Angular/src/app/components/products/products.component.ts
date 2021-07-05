import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/Product";
import {ServiceService} from '../../service.service';
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productlist : Product[] | undefined;
  constructor(
    private service:ServiceService,
    private cart:CartService
  ) {}

  // public productslist:{id:String,img:string,name:string,pricesale:number,price:number}[]=products;
  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.service.getProduct().subscribe(
      (upDateProduct) =>{
        this.productlist = upDateProduct
    });

  }
  addToCartById(id:string|undefined){
    this.cart.addToCartById(id);
  }


}
