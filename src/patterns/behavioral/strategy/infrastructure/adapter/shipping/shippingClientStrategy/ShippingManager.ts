import { Shipping } from '../../../../domain/model/shipping';
import { ShippingOrder } from '../../../../domain/model/shippingOrder';
import { ShippingClient } from './shippingClient';

export class ShippingManager {
  constructor(private shippingClient: ShippingClient = null as any) {}

  setShippingClient(shippingClient: ShippingClient) {
    this.shippingClient = shippingClient;
  }

  register(shipping: Shipping): ShippingOrder {
    try {
      return this.shippingClient.register(shipping);
    } catch (error) {
      console.error(error);

      throw new Error(
        'No fue posible registrar el envío en la plataforma' +
          (error as any).platform
      );
    }
  }
}
