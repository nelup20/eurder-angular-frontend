import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerOverviewComponent } from './components/customer/customer-overview/customer-overview.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CustomerDetailComponent } from './components/customer/customer-detail/customer-detail.component';
import { EditCustomerComponent } from './components/customer/edit-customer/edit-customer.component';
import { NewCustomerComponent } from './components/customer/new-customer/new-customer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ItemOverviewComponent } from './components/item/item-overview/item-overview.component';
import { NewItemComponent } from './components/item/new-item/new-item.component';
import { ItemDetailComponent } from './components/item/item-detail/item-detail.component';
import { EditItemComponent } from './components/item/edit-item/edit-item.component';
import { AboutPageComponent } from './components/about-page/about-page.component';

const routes: Routes = [
  { path: "", component: HomepageComponent},
  { path: "customers", component: CustomerOverviewComponent},
  { path: "customers/:id", component: CustomerDetailComponent },
  { path: "customers/:id/edit", component: EditCustomerComponent },
  { path: "new/customer", component: NewCustomerComponent },
  { path: "items", component: ItemOverviewComponent },
  { path: "items/:id", component: ItemDetailComponent },
  { path: "items/:id/edit", component: EditItemComponent },
  { path: "new/item", component: NewItemComponent },
  { path: "about", component: AboutPageComponent },
  { path: "**", component: PageNotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
