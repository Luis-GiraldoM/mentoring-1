import { Shipping } from '../model/shipping';
import { ShippingOrder } from '../model/shippingOrder';
import { ShippingRepository } from '../repository/shippingRepository';

export class PlaceShippingUseCase {
  constructor(private shippingRepository: ShippingRepository) {}

  place(shipping: Shipping): ShippingOrder {
    console.log('PlaceShippingUseCase');

    return this.shippingRepository.save(shipping);
  }
}
