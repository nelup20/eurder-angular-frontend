import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CustomerOverviewComponent } from './components/customer/customer-overview/customer-overview.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CustomerDetailComponent } from './components/customer/customer-detail/customer-detail.component';
import { EditCustomerComponent } from './components/customer/edit-customer/edit-customer.component';
import { GoBackButtonComponent } from './components/common/go-back-button/go-back-button.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NewCustomerComponent } from './components/customer/new-customer/new-customer.component';
import { ItemOverviewComponent } from './components/item/item-overview/item-overview.component';
import { ItemCardComponent } from './components/item/item-card/item-card.component';
import { LoadingSpinnerComponent } from './components/common/loading-spinner/loading-spinner.component';
import { NewItemComponent } from './components/item/new-item/new-item.component';
import { ItemDetailComponent } from './components/item/item-detail/item-detail.component';
import { EditItemComponent } from './components/item/edit-item/edit-item.component';
import { AboutPageComponent } from './components/about-page/about-page.component';

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
    AboutPageComponent,
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
