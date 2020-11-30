import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerOverviewComponent } from './components/customer-overview/customer-overview.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

const routes: Routes = [
  { path: "", component: HomepageComponent},
  { path: "customers", component: CustomerOverviewComponent},
  { path: "customers/:id", component: CustomerDetailComponent },
  { path: "customers/:id/edit", component: EditCustomerComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
