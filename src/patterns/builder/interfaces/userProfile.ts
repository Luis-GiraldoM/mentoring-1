export class UserProfile {
  private name?: string
  private lastName?: string
  private phoneNumber?: string
  private identification?: string
  private identificationType?: string
  private email?: string
  private birthDate?: Date
  private address?: string

  constructor() {}

  getName() {
    return this.name
  }

  setName(name?: string) {
    this.name = name
  }

  getLastName() {
    return this.lastName
  }

  setLastName(lastName?: string) {
    this.lastName = lastName
  }

  getPhoneNumber() {
    return this.phoneNumber
  }

  setPhoneNumber(phoneNumber?: string) {
    this.phoneNumber = phoneNumber
  }

  getIdentification() {
    return this.identification
  }

  setIdentification(identification?: string) {
    this.identification = identification
  }

  getIdentificationType() {
    return this.identificationType
  }

  setIdentificationType(identificationType?: string) {
    this.identificationType = identificationType
  }

  getEmail() {
    return this.email
  }

  setEmail(email?: string) {
    this.email = email
  }

  getBirthDate() {
    return this.birthDate
  }

  setBirthDate(birthDate?: Date) {
    this.birthDate = birthDate
  }

  getAddress() {
    return this.address
  }

  setAddress(address?: string) {
    this.address = address
  }
}
