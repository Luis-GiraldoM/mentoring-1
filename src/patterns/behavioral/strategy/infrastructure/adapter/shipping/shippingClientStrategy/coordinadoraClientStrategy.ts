import { Shipping } from '../../../../domain/model/shipping';
import { ShippingOrder } from '../../../../domain/model/shippingOrder';
import { ShippingClient } from './shippingClient';

export class CoordinadoraClientStrategy implements ShippingClient {
  register(shipping: Shipping): ShippingOrder {
    const data = { ...shipping, nit: '123456789-1', shippingType: 'express' };

    console.log('Haciendo post a www.coordinadora.com, con body:', data);

    return { id: shipping.id!, carrierId: 1431 };
  }
}
