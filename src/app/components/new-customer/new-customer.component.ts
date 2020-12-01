import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';
import { convertNewCustomerToCustomerDto } from './CustomerDto';
import { COUNTRIES } from './listOfCountries';
import { NewCustomer } from './NewCustomer';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit, OnDestroy {
  
  @Input("data-icon") iconName!: string;
  public COUNTRIES = COUNTRIES;
  private $: any;
  public fieldEmptyErrorMessage = "";
  public invalidEmailErrorMessage = "";
  public requestInitiated = false;
  private subscription!: Subscription;

  public newCustomer: NewCustomer = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: {
      countryCode: "",
      number: ""
    },
    address: {
      streetName: "",
      houseNumber: "",
      postalCode: "",
      country: "",
    }
  };

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    $(document).ready(function(){
      (<any>$('select')).formSelect();
    });
  }

  createNewCustomer(): void {
    if(!this.areAnyInputFieldsEmpty() && !this.isEmailInvalid()){
      try{
        this.requestInitiated = true;
        this.subscription = this.customerService.createNewCustomer(convertNewCustomerToCustomerDto(this.newCustomer)).subscribe(result => {
          this.requestInitiated = false;
          this.router.navigate([`/customers/${result.id}`]);
        });
      } catch (ex){
        console.error("This is an error!!!" + ex)
      }
    }
  }


  // TODO: refactor this monstrosity later
  areAnyInputFieldsEmpty(): boolean {
    for(const [key, value] of Object.entries(this.newCustomer)){
      switch(key){
        case "phoneNumber":
          if(value.countryCode === '' || value.number === ''){
            this.fieldEmptyErrorMessage = "None of the fields may be empty!";
            return true;
          }
          break;
        case "address":
          if(value.streetName === '' || value.houseNumber === '' || value.postalCode === '' || value.country === ''){
            this.fieldEmptyErrorMessage = "None of the fields may be empty!";
            return true;
          };
          break;
        default:
          if(value === ''){
            this.fieldEmptyErrorMessage = "None of the fields may be empty!";
            return true;
          }
      }
    }

    this.fieldEmptyErrorMessage = "";
    return false;
  }

  isEmailInvalid(): boolean{
    if(this.newCustomer.email.split("@")[1] === undefined || this.newCustomer.email.split("@")[1].length === 0){
      this.invalidEmailErrorMessage = "The provided email is invalid. Please put in an email of the format: john.doe@gmail.com";
      return true;
    };

    this.invalidEmailErrorMessage = "";
    return false;
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
