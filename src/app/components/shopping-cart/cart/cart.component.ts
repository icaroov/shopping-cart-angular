import { Component, OnInit } from "@angular/core";
import { MessengerService } from "src/app/services/messenger.service";

import { CartService } from "src/app/services/cart.service";
import { CartItem } from "src/app/models/cart-item";
import { Product } from "src/app/models/product";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {

  cartItems: any = [];

  cartTotal = 0;

  constructor(
    private msg: MessengerService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.handleGetProduct();
    this.loadCartItems();
  }

  handleGetProduct() {
    this.msg.getMsg().subscribe(() => {
      this.loadCartItems();
    });
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.getTotal();
    });
  } 

  getTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach((item: CartItem) => {
      this.cartTotal += (item.qty * item.price);
    });
  }
}
