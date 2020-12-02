import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ItemService } from '../../../services/item.service';
import { NewItem } from './NewItem';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit, OnDestroy {

  public newItem: NewItem = {
    name: "",
    description: "",
    price: 0,
    amountOfStock: 0
  }
  public requestInitiated = false;

  public fieldEmptyErrorMessage = "";
  public numericFieldNegativeErrorMessage = "";
  public descriptionTooLongErrorMessage = "";
  private subscription!: Subscription;

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit(): void {
    $(document).ready(function(){
      (<any>$('textarea')).characterCounter();
    });
    
  }

  createNewItem(): void{
    if(!this.areAnyInputFieldsEmptyOrNull() && !this.areAnyNumericFieldsNegative() && !this.isDescriptionTooLong()){
      try{
        this.requestInitiated = true;
        this.subscription = this.itemService.createNewItem(this.newItem).subscribe(result => {
          this.requestInitiated = false;
          this.router.navigate([`/items/${result.id}`]);
        });
      } catch (ex){
        console.error(`There was an error!! ${ex}`);
      }
    }
  }

  areAnyInputFieldsEmptyOrNull(): boolean {
    for(const [key, value] of Object.entries(this.newItem)){
      if(value === null || value === ''){
        this.fieldEmptyErrorMessage = "None of the input fields may be empty!";
        return true;
      }
    };

    this.fieldEmptyErrorMessage = "";
    return false;
  }

  areAnyNumericFieldsNegative(): boolean {
    if(this.newItem.price < 0 || this.newItem.amountOfStock < 0){
      this.numericFieldNegativeErrorMessage = "Neither price nor amount of stock can be negative!";
      return true;
    };

    this.numericFieldNegativeErrorMessage = "";
    return false;
  }

  isDescriptionTooLong(): boolean{
    if(this.newItem.description.length > 255){
      this.descriptionTooLongErrorMessage = "An item's description can't exceed 255 characters!";
      return true;
    };

    this.descriptionTooLongErrorMessage = "";
      return false;
  }


  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
