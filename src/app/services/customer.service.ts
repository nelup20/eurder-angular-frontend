import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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


}
