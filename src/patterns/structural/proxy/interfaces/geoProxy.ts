import { GeoCoder, IGeoCoder } from './geoCoder'

export class GeoProxy implements IGeoCoder {
  geocoder: GeoCoder = null as any
  geocache: Map<string, string> = new Map()

  constructor() {}

  getLatLng(address: string): string {
    if (this.geocache.has(address)) return this.geocache.get(address)!

    this.geocoder = new GeoCoder()
    const coordinades = this.geocoder.getLatLng(address)
    this.geocoder = null as any

    if (!coordinades) return ''

    this.geocache.set(address, coordinades)

    return coordinades
  }

  getCount(): number {
    return this.geocache.size
  }
}
