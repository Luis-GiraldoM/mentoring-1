import { Shipping } from '../../../../domain/model/shipping';
import { ShippingOrder } from '../../../../domain/model/shippingOrder';
import { ShippingClient } from './shippingClient';

export class EnviaClientStrategy implements ShippingClient {
  register(shipping: Shipping): ShippingOrder {
    const data = {
      ...shipping,
      customerId: '123456789-1',
      priority: 'high',
    };

    console.log('Haciendo post a www.envia.com, con body:', data);

    return { id: shipping.id!, carrierId: 23423 };
  }
}
