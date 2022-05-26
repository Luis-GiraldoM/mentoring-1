export interface Shipping {
  request: (zipStart: string, zipEnd: string, weight: string) => number
}

export class OrdinaryShipping implements Shipping {
  request(zipStart: string, zipEnd: string, weight: string) {
    return 40000
  }
}
