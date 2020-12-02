import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ItemService } from '../../../services/item.service';
import { DetailedItem } from './DetailedItem';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit, OnDestroy {

  public detailedItem!: any;
  private subscription!: Subscription;

  constructor(private itemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let itemId = this.route.snapshot.paramMap.get("id")!;
    this.itemService.getItemById(itemId).subscribe(result => this.detailedItem = result);
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
