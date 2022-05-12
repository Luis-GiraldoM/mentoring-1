import { UserProfile } from './userProfile'

export class UserProfileBuilder {
  private userProfile: UserProfile

  constructor() {
    this.userProfile = new UserProfile()
  }

  name(name?: string) {
    this.userProfile.setName(name)

    return this
  }

  lastName(lastName?: string) {
    this.userProfile.setLastName(lastName)

    return this
  }

  phoneNumber(phoneNumber?: string) {
    this.userProfile.setPhoneNumber(phoneNumber)

    return this
  }

  identification(identification?: string) {
    this.userProfile.setIdentification(identification)

    return this
  }

  identificationType(identificationType?: string) {
    this.userProfile.setIdentificationType(identificationType)

    return this
  }

  email(email?: string) {
    this.userProfile.setEmail(email)

    return this
  }

  birthDate(birthDate?: Date) {
    this.userProfile.setBirthDate(birthDate)

    return this
  }

  address(address?: string) {
    this.userProfile.setAddress(address)

    return this
  }

  build() {
    const userCopy = this.userProfile
    this.userProfile = new UserProfile()

    return userCopy
  }
}
