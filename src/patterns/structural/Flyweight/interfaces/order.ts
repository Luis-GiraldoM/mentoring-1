import { Product } from './Product'

export class Order {
  private readonly orderNumber: number
  private readonly product: Product

  constructor(orderNumber: number, product: Product) {
    this.orderNumber = orderNumber
    this.product = product
  }

  getOrderNumber(): number {
    return this.orderNumber
  }

  processOrder(): void {
    console.log('Ordering ' + this.product + ' for order number ' + this.orderNumber)
  }
}
