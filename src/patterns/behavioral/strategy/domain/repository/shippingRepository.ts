import { Shipping } from '../model/shipping';
import { ShippingOrder } from '../model/shippingOrder';

export interface ShippingRepository {
  save(shipping: Shipping): ShippingOrder;
}
