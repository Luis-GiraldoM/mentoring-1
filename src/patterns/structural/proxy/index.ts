import { GeoProxy } from './interfaces/geoProxy'

export const runProxyPattern = () => {
  const geoProxy: GeoProxy = new GeoProxy()

  geoProxy.getLatLng('Paris')
  geoProxy.getLatLng('London')
  geoProxy.getLatLng('London')
  geoProxy.getLatLng('London')
  geoProxy.getLatLng('London')
  geoProxy.getLatLng('Berlin')
  geoProxy.getLatLng('Amsterdam')
  geoProxy.getLatLng('Amsterdam')
  geoProxy.getLatLng('Amsterdam')
  geoProxy.getLatLng('Amsterdam')
  geoProxy.getLatLng('London')
  geoProxy.getLatLng('London')

  console.log('\nCache size: ' + geoProxy.getCount())
}
