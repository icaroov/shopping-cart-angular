import { Component, Input, OnInit } from "@angular/core";

import { Product } from "src/app/models/product"
import { CartItem } from 'src/app/models/cart-item'

import { MessengerService } from "src/app/services/messenger.service"
import { CartService } from "src/app/services/cart.service"

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.css"],
})
export class ProductItemComponent implements OnInit {
  @Input()
  productItem!: Product

  @Input()
  cartItem!: CartItem

  constructor(
    private msg: MessengerService,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {}

  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem)
      console.log('Id do produto:', this.productItem.id)
    });
  }

  handleRemoveToCart() {
    this.cartService.removeProductToCart(this.productItem.id).subscribe(() => {
      console.log('produto deletado:', this.productItem.id)
    })
  }
}
