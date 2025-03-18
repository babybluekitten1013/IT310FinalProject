import { Component, inject, Input } from '@angular/core';
import { DataService, Item } from '../data.service';

@Component({
  selector: 'app-shop-item',
  standalone: false,
  templateUrl: './shop-item.component.html',
  styleUrl: './shop-item.component.css'
})
export class ShopItemComponent {
  @Input() item: Item = {
    id: 0,
    name: 'Bread',
    quantity: 0
  }

  data = inject(DataService);

  onDelete() {
    this.data.removeItem(this.item);
  }
}
