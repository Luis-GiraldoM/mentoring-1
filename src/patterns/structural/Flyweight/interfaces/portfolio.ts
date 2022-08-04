import { Product } from './Product'

export class Portfolio {
  private products: Map<string, Product> = new Map<string, Product>()

  // Factory
  lookup(productName: string): Product {
    if (!this.products.has(productName)) this.products.set(productName, new Product(productName))

    return this.products.get(productName)!
  }

  public totalProductsMade(): number {
    return this.products.size
  }
}
