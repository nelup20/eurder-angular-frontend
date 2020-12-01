import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit, OnDestroy {

  public detailedCustomer: any;
  private subscription!: Subscription;

  constructor(private customerService: CustomerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const customerId = this.route.snapshot.paramMap.get("id")!;
    this.subscription = this.customerService.getCustomerById(customerId).subscribe(result => {
      this.detailedCustomer = result;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
