import { AdvancedShippingAdapter } from './interfaces/advancedShippingAdapter'
import { OrdinaryShipping } from './interfaces/shipping'
import { ShippingService } from './interfaces/shippingService'

export const runAdapterPattern = () => {
  const shippingService = new ShippingService(new OrdinaryShipping())

  console.log('The package cost is', shippingService.calculatePackageCost('14324', '214234', '2lb'))

  const shippingAdapter = new AdvancedShippingAdapter({ user: 'shipping user', password: 'myPassword' })

  const advancedShippingService = new ShippingService(shippingAdapter)

  console.log('The package cost is', advancedShippingService.calculatePackageCost('14324', '214234', '2lb'))
}

// S.O.L.I.D
// Single Responsability - Yes
// Open/Close - Yes
// Liskov Substitution - Yes
// Interface Segregation - Yes
// Dependency Injection - Yes
