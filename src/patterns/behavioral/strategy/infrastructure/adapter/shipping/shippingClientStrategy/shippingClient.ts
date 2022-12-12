import { Shipping } from '../../../../domain/model/shipping';
import { ShippingOrder } from '../../../../domain/model/shippingOrder';

export interface ShippingClient {
  register(shippng: Shipping): ShippingOrder;
}
