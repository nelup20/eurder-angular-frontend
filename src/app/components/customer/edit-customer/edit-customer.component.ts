import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';
import { convertCustomerToEditToCustomerDto, convertNewCustomerToCustomerDto } from '../new-customer/CustomerDto';
import { COUNTRIES } from '../new-customer/listOfCountries';
import { convertCustomerDtoToCustomerToEdit, CustomerToEdit } from './CustomerToEdit';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  @Input("data-icon") iconName!: string;
  public COUNTRIES = COUNTRIES;
  private $: any;
  public fieldEmptyErrorMessage = "";
  public invalidEmailErrorMessage = "";
  public requestInitiated = false;
  private subscription!: Subscription;

  public customerToEdit: CustomerToEdit = {
    id: "",
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

  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Used by Materialize CSS's JS for the Select element (countries)
    $(document).ready(function(){
      (<any>$('select')).formSelect();
    });

    const customerId = this.route.snapshot.paramMap.get("id")!;
    this.subscription = this.customerService.getCustomerById(customerId).subscribe(result => {
    this.customerToEdit = convertCustomerDtoToCustomerToEdit(result);
    });
  }

  updateCustomer(): void {
    if(!this.areAnyInputFieldsEmpty() && !this.isEmailInvalid()){
      try{
        this.requestInitiated = true;
        this.subscription = this.customerService.updateCustomer(convertCustomerToEditToCustomerDto(this.customerToEdit)).subscribe(result => {
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
    for(const [key, value] of Object.entries(this.customerToEdit)){
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
    if(this.customerToEdit.email.split("@")[1] === undefined || this.customerToEdit.email.split("@")[1].length === 0){
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
