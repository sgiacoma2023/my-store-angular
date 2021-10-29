import { Injectable } from '@angular/core';

import { Product } from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
    products: Product[] = [
      new Product(1, 'Blue Candle', 'Blue Candle', 5, 'https://images.thdstatic.com/productImages/5b1c99fe-7e70-463e-8737-248bb0365b13/svn/blue-zest-candle-candles-cpz-077-12-64_1000.jpg'),
      new Product(2, 'Body Scrub', 'Body Scrub', 10, 'https://m.media-amazon.com/images/I/91noaNLihmL._SL1500_.jpg'),
      new Product(3, 'Nail Polish', 'Nail Polish', 7, 'https://target.scene7.com/is/image/Target/GUEST_e6b4f362-2612-45cb-a56e-7916c3635b5b?wid=488&hei=488&fmt=pjpeg'),
      new Product(4, 'Charm Bracelet', 'Charm Bracelet', 35, 'https://media-us.cdn.prod.wmgecom.com/media/catalog/product/cache/564/image/800x/9df78eab33525d08d6e5fb8d27136e95/0/8/082619_mm_k12_merch_bracelet.png'),
      new Product(5, 'Crystal', 'Crystal', 9, 'https://www.crystalvaults.com/wp-content/uploads/2021/08/213654.jpg'),
      new Product(6, 'Notebook', 'Notebook', 20, 'https://poppin.imgix.net/products/2020/poppin_coast_lagoon_work_happy_1-subjec_notebook_PDP_01.jpg'),
    ]
  constructor() { }

  getProducts(): Product[]{
     //TODO: populate products from API?
    return this.products
  }
}
