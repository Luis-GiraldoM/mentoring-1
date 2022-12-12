import { Shipping } from '../../../../domain/model/shipping';
import { ShippingOrder } from '../../../../domain/model/shippingOrder';
import { ShippingClient } from './shippingClient';

export class InterRapidisimoClientStrategy implements ShippingClient {
  register(shipping: Shipping): ShippingOrder {
    const data = {
      ...shipping,
      customerIdentification: '123456789-1',
      shippingSpeed: 'high',
    };

    console.log('Haciendo post a www.interrapidisimo.com, con body:', data);

    return { id: shipping.id!, carrierId: 34543534 };
  }
}
