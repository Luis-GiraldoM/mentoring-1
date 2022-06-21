import { CartItem } from './cart'

export class Bundle implements CartItem {
  private items: CartItem[] = []

  constructor(public name: string, public quantity: number) {}

  addProduct(item: CartItem) {
    this.items.push(item)
  }

  getPrice() {
    return this.items.reduce((subtotal, item) => subtotal + item.getPrice() * this.quantity, 0)
  }
}
