import { Shipping } from './shipping'
export class ShippingService {
  constructor(private shippingManager: Shipping) {}

  calculatePackageCost(zipStart: string, zipEnd: string, weight: string) {
    // BD Query Data
    return this.shippingManager.request(zipStart, zipEnd, weight)
  }
}
