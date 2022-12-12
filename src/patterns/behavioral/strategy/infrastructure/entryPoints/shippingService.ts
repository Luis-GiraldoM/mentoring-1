import { Shipping } from '../../domain/model/shipping';
import { PlaceShippingUseCase } from '../../domain/useCase/placeShippingUseCase';

export class ShippingService {
  constructor(private placeShippingUseCase: PlaceShippingUseCase) {}

  // POST
  placeShipping(shipping: Shipping): string {
    console.log('Reciviendo petición para placeShipping');

    const responseString = JSON.stringify(
      this.placeShippingUseCase.place(shipping)
    );

    console.log('Respondiendo POST con ', responseString);

    return responseString;
  }
}
