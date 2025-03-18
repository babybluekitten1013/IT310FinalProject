import { Component, inject } from '@angular/core';
import { DataService, Item } from '../data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-create',
  standalone: false,
  templateUrl: './item-create.component.html',
  styleUrl: './item-create.component.css'
})
export class ItemCreateComponent {

  data = inject(DataService)
  fb = inject(FormBuilder)
  router = inject(Router)

  itemForm = this.fb.group({
    id: [0, Validators.required],
    name: [''],
    quantity: [0, Validators.required]
  });

  onInit() {
    this.itemForm = this.fb.group({
      id: [0, Validators.required],
      name: [''],
      quantity: [0, Validators.required]
    });
  }

  onSave() {
    console.log(this.itemForm.value);

    let newItem: Item = {
      id: this.itemForm.value.id!,
      name: this.itemForm.value.name!,
      quantity: this.itemForm.value.quantity!
    }

    this.data.addItem(newItem);
    this.onInit();
    this.router.navigate(['']);
  }
}
