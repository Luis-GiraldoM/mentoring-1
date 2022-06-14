import { CartItem } from './cart'

export class Product implements CartItem {
  getPrice: () => number
}
