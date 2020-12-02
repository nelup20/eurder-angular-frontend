
export interface NewCustomer {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: {
      countryCode: string,
      number: string
    },
    address: {
      streetName: string,
      houseNumber: string,
      postalCode: string,
      country: string,
    }
}