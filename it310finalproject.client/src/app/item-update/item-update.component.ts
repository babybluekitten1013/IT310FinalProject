import { Component, inject, OnInit } from '@angular/core';
import { DataService, Item } from '../data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-update',
  standalone: false,
  templateUrl: './item-update.component.html',
  styleUrl: './item-update.component.css'
})
export class ItemUpdateComponent implements OnInit {
  


  data = inject(DataService)
  fb = inject(FormBuilder)
  router = inject(Router)
  route = inject(ActivatedRoute)

  selectedItem$ = this.data.selectedItem$;
  item: Item = {
    id: 0,
    name: '',
    quantity: 0
  };

  itemForm = this.fb.group({
    id: [0, Validators.required],
    name: [''],
    quantity: [0, Validators.required]
  });

  ngOnInit(): void {
    this.selectedItem$.subscribe(data => {
      this.item = data;
      this.onInit();
    })

    this.route.paramMap.subscribe(params => {
      //getting item id
      let id = Number(params.get('id'));
      this.data.getItem(id);
    })
  }

  onInit() {
    this.itemForm = this.fb.group({
      id: [this.item.id, Validators.required],
      name: [this.item.name],
      quantity: [this.item.quantity, Validators.required]
    });
  }

  onSave() {
    console.log(this.itemForm.value);

    let updateItem: Item = {
      id: this.itemForm.value.id!,
      name: this.itemForm.value.name!,
      quantity: this.itemForm.value.quantity!
    }

    this.data.updateItem(updateItem);
    this.onInit();
    this.router.navigate(['']);
  }
}
