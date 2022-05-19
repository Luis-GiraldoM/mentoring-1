export class Address {
  private country: string
  private city: string
  private place: string
  private complement?: string
  private postalCode?: string
  private config: any

  constructor() {
    this.country = ''
    this.city = ''
    this.place = ''
    this.config = {}
  }

  getCountry() {
    return this.country
  }

  setCountry(country: string) {
    this.country = country
  }

  getCity() {
    return this.city
  }

  setCity(city: string) {
    this.city = city
  }

  getPlace() {
    return this.place
  }

  setPlace(place: string) {
    this.place = place
  }

  getComplement() {
    return this.complement
  }

  setComplement(complement?: string) {
    this.complement = complement
  }

  getPostalCode() {
    return this.postalCode
  }

  setPostalCode(postalCode?: string) {
    this.postalCode = postalCode
  }

  getConfig() {
    return this.config
  }

  setConfig(config: any) {
    this.config = config
  }
}
