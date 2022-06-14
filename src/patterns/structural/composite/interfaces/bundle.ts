import { CartItem } from './cart'

export class Bundle implements CartItem {
  private items: CartItem[] = []

  getPrice: () => number
}
