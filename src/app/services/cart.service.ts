import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
import { MessengerService } from './messenger.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Array<CartItem> = [
    //{ id: 1, productId: 1, productName: 'test1', qty: 4, price: 20},
    //{ id: 2, productId: 3, productName: 'test3', qty: 5, price: 25},
    //{ id: 3, productId: 2, productName: 'test2', qty: 3, price: 20},
    //{ id: 4, productId: 4, productName: 'test4', qty: 2, price: 35}
  ];

  cartTotal = 0;
  constructor(private  msg:  MessengerService) { }
  // bring in cart items to the cart
  getCartItems(){ 
    return this.cartItems;
  }

  // get the cart total 
  getCartTotal(){
    return this.cartTotal;
  }

  addProductToCart(product: Product) {
    
    let productExists  = false

    for(let i in this.cartItems){
      if(this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++
        productExists = true
        break;
      }
    }
    if(!productExists){
      this.cartItems.push({
        id: product.id,
        productId: product.id,
        productName: product.name, 
        qty: 1,
        price: product.price
      })

      // calculate cart total
      this.cartTotal = 0
      this.cartItems.forEach(item =>  {
        this.cartTotal += (item.qty * item.price)
      })
    }

    
    
  }
}
