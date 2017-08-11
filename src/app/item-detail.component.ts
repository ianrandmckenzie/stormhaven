import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Item }         from './item';
import { ItemService }  from './item.service';
import { Globals} from './globals';

@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: [ './item-detail.component.css' ]
})
export class ItemDetailComponent implements OnInit {
  item: Item;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private location: Location,
    private globals: Globals
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.itemService.getItem(+params.get('id')))
      .subscribe(item => this.item = item);
  }

  useItem(): void {
    switch (this.item.id){
      case 1:
        setInterval(() => {
          this.globals.warmth += 1;
        }, 1000);
        break;
      case 9:
        this.globals.energy += 35;
        break;
      case 11:
        this.globals.energy += 35;
        this.globals.sanity -= 20;
      default:
        break;
    }
  }

  goBack(): void {
    this.location.back();
  }
}
