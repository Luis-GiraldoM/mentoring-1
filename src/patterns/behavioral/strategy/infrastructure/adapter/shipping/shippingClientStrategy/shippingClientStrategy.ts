import { Shipping } from '../../../domain/model/shipping';
import { ShippingOrder } from '../../../domain/model/shippingOrder';

export interface ShippingClientStrategy {
  registerShipping: (shipping: Shipping) => ShippingOrder;
}
