import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


export interface Item {
  id: number,
  name: string,
  quantity: number
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private items: Item[] = [];

  items$: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);
  selectedItem$: Subject<Item> = new Subject<Item>();

  constructor(private http: HttpClient) { }

  getAllItems(): void {
    this.http.get<Item[]>(`api/items`).subscribe(data => {
      this.items$.next(data);
    });
  }

  addItem(item: Item): void {
    this.http.post<Item>(`api/items`, item).subscribe(data => {
      this.getAllItems();
    });
  }

  removeItem(item: Item): void {
    this.http.delete(`api/items/${item.id}`).subscribe(() => {
      this.getAllItems();
    })
  }

  updateItem(item: Item): void {
    this.http.put<Item>(`api/items/${item.id}`, item).subscribe(data => {
      this.getAllItems();
    })
  }

  getItem(id: number): void {
    this.http.get<Item>(`api/items/${id}`).subscribe(data => {
      this.selectedItem$.next(data);
    });
  }
}
