export interface Shipping {
  request: (zipStart: string, zipEnd: string, weight: string) => number
}

export class OrdinaryShipping implements Shipping {
  request(zipStart: string, zipEnd: string, weight: string) {
    console.log('Calculating cost with', zipStart, zipEnd, weight)

    return 40000
  }
}
