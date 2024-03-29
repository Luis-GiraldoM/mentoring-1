export interface IGeoCoder {
  getLatLng(address: string): string
}

export class GeoCoder implements IGeoCoder {
  constructor() {
    console.log('GeoCoder Constructor call')
  }

  getLatLng(address: string): string {
    console.log('Calling real service')

    if (address === 'Amsterdam') {
      return '52.3700° N, 4.8900° E'
    } else if (address === 'London') {
      return '51.5171° N, 0.1062° W'
    } else if (address === 'Paris') {
      return '48.8742° N, 2.3470° E'
    } else if (address === 'Berlin') {
      return '52.5233° N, 13.4127° E'
    } else {
      return ''
    }
  }
}
