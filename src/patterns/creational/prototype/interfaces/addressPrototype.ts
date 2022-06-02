import { Address } from '../../../../interfaces/address'

export class AddressPrototype {
  private address: Address

  constructor(address: Address) {
    this.address = address
  }

  clone(): Address {
    const addressCopy = new Address()

    addressCopy.setCountry(this.address.getCountry())
    addressCopy.setCity(this.address.getCity())
    addressCopy.setPlace(this.address.getPlace())
    addressCopy.setComplement(this.address.getComplement())
    addressCopy.setPostalCode(this.address.getPostalCode())
    addressCopy.setConfig({ ...this.address.getConfig() })

    return addressCopy
  }
}
