import { OrdinaryShipping } from './interfaces/shipping'
import { ShippingService } from './interfaces/shippingService'

export const runAdapterPattern = () => {
  const shippingService = new ShippingService(new OrdinaryShipping())

  console.log('The package cost is', shippingService.calculatePackageCost('14324', '214234', '2lb'))
}
