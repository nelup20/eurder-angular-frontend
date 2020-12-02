import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ItemService } from '../../services/item.service';
import { NewItem } from '../new-item/NewItem';
import { ItemToEdit } from './ItemToEdit';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit, OnDestroy {

  
  public itemToEdit: ItemToEdit = {
    id: "",
    name: "",
    description: "",
    price: 0,
    amountOfStock: 0,
    stockUrgency: "",
  }
  public requestInitiated = false;

  public fieldEmptyErrorMessage = "";
  public numericFieldNegativeErrorMessage = "";
  public descriptionTooLongErrorMessage = "";
  private getItemByIdSubscription!: Subscription;
  private updateItemSubscription!: Subscription;

  constructor(private itemService: ItemService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    $(document).ready(function(){
      (<any>$('textarea')).characterCounter();
    });
    
    let itemId = this.route.snapshot.paramMap.get("id")!;
    this.getItemByIdSubscription = this.itemService.getItemById(itemId).subscribe(result => this.itemToEdit = result);
  }

  updateItem(): void{
    if(!this.areAnyInputFieldsEmptyOrNull() && !this.areAnyNumericFieldsNegative() && !this.isDescriptionTooLong()){
      try{
        this.requestInitiated = true;
        this.updateItemSubscription = this.itemService.updateItem(this.itemToEdit).subscribe(result => {
          this.requestInitiated = false;
          this.router.navigate([`/items/${result.id}`]);
        });
      } catch (ex){
        console.error(`There was an error!! ${ex}`);
      }
    }
  }

  areAnyInputFieldsEmptyOrNull(): boolean {
    for(const [key, value] of Object.entries(this.itemToEdit)){
      if(value === null || value === ''){
        this.fieldEmptyErrorMessage = "None of the input fields may be empty!";
        return true;
      }
    };

    this.fieldEmptyErrorMessage = "";
    return false;
  }

  areAnyNumericFieldsNegative(): boolean {
    if(this.itemToEdit.price < 0 || this.itemToEdit.amountOfStock < 0){
      this.numericFieldNegativeErrorMessage = "Neither price nor amount of stock can be negative!";
      return true;
    };

    this.numericFieldNegativeErrorMessage = "";
    return false;
  }

  isDescriptionTooLong(): boolean{
    if(this.itemToEdit.description.length > 255){
      this.descriptionTooLongErrorMessage = "An item's description can't exceed 255 characters!";
      return true;
    };

    this.descriptionTooLongErrorMessage = "";
      return false;
  }


  ngOnDestroy(): void {
    if(this.getItemByIdSubscription){
      this.getItemByIdSubscription.unsubscribe();
    }

    if(this.updateItemSubscription){
      this.updateItemSubscription.unsubscribe();
    }
  }
}
