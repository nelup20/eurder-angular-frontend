import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CustomerOverviewComponent } from './components/customer-overview/customer-overview.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { GoBackButtonComponent } from './components/go-back-button/go-back-button.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { ItemOverviewComponent } from './components/item-overview/item-overview.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { NewItemComponent } from './components/new-item/new-item.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    CustomerOverviewComponent,
    FooterComponent,
    CustomerDetailComponent,
    EditCustomerComponent,
    GoBackButtonComponent,
    PageNotFoundComponent,
    NewCustomerComponent,
    ItemOverviewComponent,
    ItemCardComponent,
    LoadingSpinnerComponent,
    NewItemComponent,
    ItemDetailComponent,
    EditItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
