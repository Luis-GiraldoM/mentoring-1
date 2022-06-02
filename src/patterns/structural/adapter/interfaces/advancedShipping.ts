import { Credentials } from './credentials'

export class AdvancedShipping {
  private startZipCode: string = ''
  private endZipCode: string = ''

  login(credentials: Credentials) {
    console.log('Login with credentials', credentials)
  }

  setStart(startZipCode: string) {
    this.startZipCode = startZipCode
  }

  setEnd(endZipCode: string) {
    this.endZipCode = endZipCode
  }

  calculateCost(weight: string) {
    console.log('Calculating cost with', this.startZipCode, this.endZipCode, weight)

    return 35000
  }
}
