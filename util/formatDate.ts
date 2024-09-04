export interface Address {
  streetAddress: string
  zipcode: string
  city: string
  state: string
}

export const formatDate = (address: Address): string => {
  return `${address.streetAddress}, ${address.city}, ${address.state}`
}
