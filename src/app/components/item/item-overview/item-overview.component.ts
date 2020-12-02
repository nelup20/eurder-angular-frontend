import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemService } from '../../../services/item.service';
import { BasicInfoItem } from './BasicInfoItem';

@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html',
  styleUrls: ['./item-overview.component.css']
})
export class ItemOverviewComponent implements OnInit, OnDestroy {

  public filterInput = "";
  public allItems: BasicInfoItem[] = [];
  public filterItems: BasicInfoItem[] = [];
  private subscription!: Subscription;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.subscription = this.itemService.getAllItems().subscribe(result => {
      this.allItems = result;
      this.filterItems = this.allItems;
    });
  }

  filterItemList(): void {
    if(this.filterInput === ''){
      this.filterItems = this.allItems;
    } else {
      let result = [];
      for(let item of this.allItems){
        if(item.name.toLowerCase().includes(this.filterInput.toLowerCase())){
          result.push(item);
        }
      }
      this.filterItems = result;
    }
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
