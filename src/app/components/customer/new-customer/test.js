fetch("http://localhost:9000/customers", {
 method: "POST",
 headers: {
    'Content-Type': 'application/json'
  },
 body: {
  "address": {
    "country": "string",
    "houseNumber": "string",
    "postalCode": "string",
    "streetName": "string"
  },
  "email": {
    "complete": "string",
    "domain": "string",
    "localPart": "string"
  },
  "firstname": "string",
  "id": "string",
  "lastname": "string",
  "phoneNumber": {
    "countryCallingCode": "string",
    "number": "string"
  }
}
}).then(data => console.log(data));