import { Order } from './order'
import { Portfolio } from './portfolio'
import { Product } from './Product'

export class Inventory {
  private portfolio: Portfolio = new Portfolio()
  private orders: Order[] = new Array<Order>()

  executeOrder(productName: string, orderNumber: number): void {
    const product: Product = this.portfolio.lookup(productName)
    const order: Order = new Order(orderNumber, product)
    this.orders.push(order)
  }

  process(): void {
    for (const order of this.orders) {
      order.processOrder()

      this.orders = this.orders.filter((orden) => orden.getOrderNumber() !== order.getOrderNumber())
    }
  }

  getTotalProducts(): number {
    return this.portfolio.totalProductsMade()
  }
}
