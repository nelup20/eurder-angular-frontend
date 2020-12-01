import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDto } from '../components/new-customer/CustomerDto';
import { NewCustomer } from '../components/new-customer/NewCustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private BASE_URL = "http://localhost:9000/customers";

  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<any>{
    return this.http.get(this.BASE_URL);
  }

  getCustomerById(customerId: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/${customerId}`);
  }

  createNewCustomer(customerDto: CustomerDto): Observable<CustomerDto> {
    let httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };

    return this.http.post<CustomerDto>(this.BASE_URL, customerDto, httpOptions);
  }

  updateCustomer(customerDto: CustomerDto): Observable<CustomerDto> {
    let httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };

    return this.http.put<CustomerDto>(`${this.BASE_URL}/${customerDto.id}`, customerDto, httpOptions);
  }

  
}
