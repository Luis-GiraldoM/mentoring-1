import { CartItem } from './cart'

export class Product implements CartItem {
  constructor(public name: string, public quantity: number, public price: number) {}

  getPrice() {
    return this.price * this.quantity
  }
}
