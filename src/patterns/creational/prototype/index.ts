import { Address } from '../../../interfaces/address'
import { UserProfileBuilder } from '../builder/interfaces/userProfileBuilder'
import { AddressPrototype } from './interfaces/addressPrototype'
export const runPrototypePattern = () => {
  const userBuilder = new UserProfileBuilder()

  userBuilder.name('Luis').lastName('Giraldo')

  const config = { port: '8080' }

  const defaultAddress = new Address()
  defaultAddress.setCountry('Colombia')
  defaultAddress.setCity('Medellín')
  defaultAddress.setPlace('')
  defaultAddress.setComplement('')
  defaultAddress.setPostalCode('050')
  defaultAddress.setConfig(config)

  const defaultAddressPrototype = new AddressPrototype(defaultAddress)

  const newAddress1 = defaultAddressPrototype.clone()

  newAddress1.setPlace('Calle 50 # 43 - 123')
  newAddress1.setPostalCode('051043')

  const newAddress2 = defaultAddressPrototype.clone()

  newAddress2.setCity('Envigado')
  newAddress2.setPlace('Calle 10 SUR # 56 - 80')
  newAddress2.setComplement('Torres del Amanecer, Apt 301')

  const newAddress3 = defaultAddressPrototype.clone()

  newAddress3.setPlace('Cella 80 # 33a - 90')
  newAddress3.setComplement('Casa, piso 2')
  newAddress3.setPostalCode('051358')

  userBuilder.address(newAddress1).address(newAddress2).address(newAddress3)

  console.log(userBuilder.build())

  config.port = '433'

  console.log(defaultAddress.getConfig(), newAddress1.getConfig(), newAddress2.getConfig())
}
