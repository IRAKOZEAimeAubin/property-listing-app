export interface Property {
  zpid: string
  address: {
    streetAddress: string
    zipcode: string
    city: string
    state: string
  }
  media: {
    propertyPhotoLinks: {
      highResolutionLink: string
    }
    allPropertyPhotos: {
      highResolution: string[]
    }
  }
  bathrooms: number
  bedrooms: number
  lotSizeWithUnit: {
    lotSize: number
    lotSizeUnit: string
  }
  propertyType: string
  price: {
    value: number
  }
}
