import { Component, OnInit } from '@angular/core';
import {CartService} from "../services/cart.service";
import {Product} from "../../model/Product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  listPro: any;
  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.getListProInCart();
  }

  getListProInCart(){
    return this.listPro = this.cart.getItems();
  }


}
