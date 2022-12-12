import { ShippingRepository } from '../domain/repository/shippingRepository';
import { ShippingManager } from '../infrastructure/adapter/shipping/shippingClientStrategy/ShippingManager';
import { ShippingDao } from '../infrastructure/adapter/shipping/shippingDAO';
import { ShippingRepositoryImpl } from '../infrastructure/adapter/shipping/ShippingRepositoryImpl';

const shippingDao = new ShippingDao();
const shippingManager = new ShippingManager();

export const shippingRepository: ShippingRepository =
  new ShippingRepositoryImpl(shippingDao, shippingManager);
