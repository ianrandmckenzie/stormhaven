import { Item } from './item';
import { ITEMS } from './mock-items';
import { Injectable } from '@angular/core';

@Injectable()
export class ItemService {
  getItems(): Promise<Item[]> {
    return Promise.resolve(ITEMS);
  }

  getItemsSlowly(): Promise<Item[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getItems()), 2000);
    });
  }

  getItem(id: number): Promise<Item> {
    return this.getItems()
               .then(items => items.find(item => item.id === id));
  }
}
