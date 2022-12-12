import { Shipping } from '../../../domain/model/shipping';

export class ShippingDao {
  save(shipping: Shipping): Shipping {
    console.log('Registrando shipping en BD');

    return { ...shipping, id: 1 };
  }
}
