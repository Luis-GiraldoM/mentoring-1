import { placeShippingUseCase } from './application/useCaseConfig';
import { Shipping } from './domain/model/shipping';
import { ShippingService } from './infrastructure/entryPoints/shippingService';

export const runStrategyPattern = () => {
  const shippingService = new ShippingService(placeShippingUseCase);

  const shippingDTO: Shipping = {
    address: 'Calle 50 # 43 - 80',
    addressComplement: 'APT 201',
    city: 'Medellin',
    country: 'Colombia',
    customerName: 'Lopez',
    state: 'Antioquia',
    zipCode: '051',
  };

  const result = shippingService.placeShipping(shippingDTO);

  console.log('Response shipping service, place shipping, ', result);
};
