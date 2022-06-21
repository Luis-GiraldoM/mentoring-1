export interface CartItem {
  name: string
  quantity: number
  getPrice: () => number
}

export class Cart {
  private items: CartItem[] = []

  addProduct(item: CartItem) {
    this.items.push(item)
  }

  getItems(): CartItem[] {
    return [...this.items]
  }

  getPrice(): number {
    return this.items.reduce((subtotal, item) => subtotal + item.getPrice(), 0)
  }
}
