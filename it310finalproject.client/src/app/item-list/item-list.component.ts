import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-item-list',
  standalone: false,
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent implements OnInit {

  data = inject(DataService);

  items$ = this.data.items$;

  ngOnInit(): void {
    this.data.getAllItems();
  }
}
