import { Shipping } from '../../../domain/model/shipping';
import { ShippingOrder } from '../../../domain/model/shippingOrder';
import { ShippingRepository } from '../../../domain/repository/shippingRepository';
import { CoordinadoraClientStrategy } from './shippingClientStrategy/coordinadoraClientStrategy';
import { EnviaClientStrategy } from './shippingClientStrategy/enviaClientStrategy';
import { InterRapidisimoClientStrategy } from './shippingClientStrategy/interRapidisimoClientStrategy';
import { ShippingClient } from './shippingClientStrategy/shippingClient';
import { ShippingManager } from './shippingClientStrategy/ShippingManager';
import { TCCClientStrategy } from './shippingClientStrategy/tccClientStrategy';
import { ShippingDao } from './shippingDAO';

const strategies = [
  new EnviaClientStrategy(),
  new TCCClientStrategy(),
  new InterRapidisimoClientStrategy(),
  new CoordinadoraClientStrategy(),
];

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

const shippingStrategyProvider = (): ShippingClient => {
  return strategies[getRandomInt(strategies.length)];
};

export class ShippingRepositoryImpl implements ShippingRepository {
  constructor(
    private shippingDao: ShippingDao,
    private shippingManager: ShippingManager
  ) {}

  save(shipping: Shipping): ShippingOrder {
    const savedShipping = this.shippingDao.save(shipping);

    const strategy = shippingStrategyProvider();
    this.shippingManager.setShippingClient(strategy);

    return this.shippingManager.register(savedShipping);
  }
}
