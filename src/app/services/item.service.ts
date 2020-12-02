import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemToEdit } from '../components/edit-item/ItemToEdit';
import { NewItem } from '../components/new-item/NewItem';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private BASE_URL = "http://localhost:9000/items";

  constructor(private http: HttpClient) { }

  public getAllItems(): Observable<any> {
    return this.http.get(this.BASE_URL);
  }

  public createNewItem(newItem: NewItem): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };

    return this.http.post(this.BASE_URL, newItem, httpOptions);
  }

  public getItemById(itemId: string): Observable<ItemToEdit>{
    return this.http.get<ItemToEdit>(`${this.BASE_URL}/${itemId}`);
  }

  public updateItem(itemToUpdate: ItemToEdit): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };

    return this.http.put(`${this.BASE_URL}/${itemToUpdate.id}`, itemToUpdate, httpOptions);
  }
}
