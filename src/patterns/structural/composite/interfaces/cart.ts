export interface CartItem {
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
    return 0
  }
}
