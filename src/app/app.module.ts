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
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { GoBackButtonComponent } from './go-back-button/go-back-button.component';

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
