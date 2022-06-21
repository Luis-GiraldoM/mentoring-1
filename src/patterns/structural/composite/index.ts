import { Bundle } from './interfaces/bundle'
import { Cart } from './interfaces/cart'
import { Product } from './interfaces/product'

export const runCompositePattern = () => {
  const product1 = new Product('Medias rojas', 3, 3000)
  const product2 = new Product('Camiseta polo negra', 1, 45000)

  const product3 = new Product('Camiseta roja', 2, 20000)
  const product4 = new Product('Pantalon', 1, 60000)
  const bundle1 = new Bundle('Promoción paquete 2 camisetas + 1 pantalón', 1)
  bundle1.addProduct(product3)
  bundle1.addProduct(product4)

  const bundle2 = new Bundle('Promoción extraordinaria', 1)

  bundle2.addProduct(product1)
  bundle2.addProduct(bundle1)

  const cart = new Cart()

  cart.addProduct(product1)
  cart.addProduct(product2)
  cart.addProduct(bundle1)
  cart.addProduct(bundle2)

  const totalPrice = cart.getPrice()

  console.log('Los productos son:', cart.getItems())
  console.log('El total del carrito es:', totalPrice)
}
