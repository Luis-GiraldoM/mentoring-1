export interface Shipping {
  id?: number;
  customerName: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
  address: string;
  addressComplement: string;
  shippingOriginId?: number;
}
