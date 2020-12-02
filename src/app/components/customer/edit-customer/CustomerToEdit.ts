import { CustomerDto } from '../new-customer/CustomerDto';

export interface CustomerToEdit {
    id?: string,
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

export function convertCustomerDtoToCustomerToEdit(customerDto: CustomerDto): CustomerToEdit{
    let result = {
        id: customerDto.id,
        firstName: customerDto.firstname,
        lastName: customerDto.lastname,
        email: customerDto.email.complete,
        phoneNumber: {
            countryCode: customerDto.phoneNumber.countryCallingCode,
            number: customerDto.phoneNumber.number
        },
        address: {
            streetName: customerDto.address.streetName,
            houseNumber: customerDto.address.houseNumber,
            postalCode: customerDto.address.postalCode,
            country: customerDto.address.country,
    }
    }

    return result;
}