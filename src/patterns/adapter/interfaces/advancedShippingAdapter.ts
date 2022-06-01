import { AdvancedShipping } from './advancedShipping'
import { Credentials } from './credentials'
import { Shipping } from './shipping'

export class AdvancedShippingAdapter implements Shipping {
  private advancedShipping = new AdvancedShipping()

  constructor(credentials: Credentials) {
    this.advancedShipping.login(credentials)
  }

  request(zipStart: string, zipEnd: string, weight: string) {
    this.advancedShipping.setStart(zipStart)
    this.advancedShipping.setEnd(zipEnd)

    return this.advancedShipping.calculateCost(weight)
  }
}
