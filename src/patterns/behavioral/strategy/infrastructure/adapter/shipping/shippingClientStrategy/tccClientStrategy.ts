import { Shipping } from '../../../../domain/model/shipping';
import { ShippingOrder } from '../../../../domain/model/shippingOrder';
import { ShippingClient } from './shippingClient';

export class TCCClientStrategy implements ShippingClient {
  register(shipping: Shipping): ShippingOrder {
    const data = {
      ...shipping,
      identification: '123456789-1',
      transportSpeed: 'high',
    };

    console.log('Haciendo post a www.tcc.com, con body:', data);

    return { id: shipping.id!, carrierId: 3453453423312 };
  }
}
