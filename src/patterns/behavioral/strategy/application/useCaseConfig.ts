import { PlaceShippingUseCase } from '../domain/useCase/placeShippingUseCase';
import { shippingRepository } from './repositoryConfig';

export const placeShippingUseCase = new PlaceShippingUseCase(
  shippingRepository
);
