import { CustomerToEdit } from '../edit-customer/CustomerToEdit';
import { NewCustomer } from './NewCustomer';

export interface CustomerDto{
    id?: string,
    firstname: string,
    lastname: string,
    email: {
        complete: string,
        domain: string,
        localPart: string
    },
    phoneNumber: {
      countryCallingCode: string,
      number: string
    },
    address: {
      streetName: string,
      houseNumber: string,
      postalCode: string,
      country: string,
    }
}

export function convertNewCustomerToCustomerDto(newCustomer: NewCustomer): CustomerDto{
    let result = {
        firstname: newCustomer.firstName,
        lastname: newCustomer.lastName,
    email: {
        complete: newCustomer.email,
        domain: newCustomer.email.split("@")[1],
        localPart: newCustomer.email.split("@")[0]
    },
    phoneNumber: {
      countryCallingCode: newCustomer.phoneNumber.countryCode,
      number: newCustomer.phoneNumber.number
    },
    address: {
      streetName: newCustomer.address.streetName,
      houseNumber: newCustomer.address.houseNumber,
      postalCode: newCustomer.address.postalCode,
      country: newCustomer.address.country,
    }
    };

    return result;
}

export function convertCustomerToEditToCustomerDto(customerToEdit: CustomerToEdit): CustomerDto{
  let result = {
      id: customerToEdit.id,
      firstname: customerToEdit.firstName,
      lastname: customerToEdit.lastName,
  email: {
      complete: customerToEdit.email,
      domain: customerToEdit.email.split("@")[1],
      localPart: customerToEdit.email.split("@")[0]
  },
  phoneNumber: {
    countryCallingCode: customerToEdit.phoneNumber.countryCode,
    number: customerToEdit.phoneNumber.number
  },
  address: {
    streetName: customerToEdit.address.streetName,
    houseNumber: customerToEdit.address.houseNumber,
    postalCode: customerToEdit.address.postalCode,
    country: customerToEdit.address.country,
  }
  };

  return result;
}
