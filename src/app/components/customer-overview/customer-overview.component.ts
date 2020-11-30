import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { CustomerOverview } from './customerOverview';

@Component({
  selector: 'app-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.css']
})
export class CustomerOverviewComponent implements OnInit {

  public allCustomers!: CustomerOverview[];
  public filterInput = "";
  public filteredCustomers!: CustomerOverview[];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe(result => {
      this.allCustomers = result as CustomerOverview[];
      this.filteredCustomers = this.allCustomers;
    });
  }

  filterCustomerList(): void {
    if(this.filterInput === ''){
      this.filteredCustomers = this.allCustomers;
    } else {
      let resultList = [];
      for(let customer of this.allCustomers){
        if(customer.lastname.toLowerCase().includes(this.filterInput.toLowerCase())){
          resultList.push(customer);
        }
      };

      this.filteredCustomers = resultList;
    }
  }

}
