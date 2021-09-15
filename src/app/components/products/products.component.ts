import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddItemAction } from 'src/app/store/actions/product.action';
import { ProductItem } from '../../store/models/product.model';
import { AppState } from '../../store/models/state.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productForm: any = FormGroup;

  // observable that is holding the products data coming from store and continously listening to the store changes
  productItems$: Observable<Array<ProductItem>> | any;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formInit(); 

    // getting products from store
    this.productItems$ = this.store.select((store) => store.products.products);
  }

  formInit() {
    this.productForm = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      price: ['', [Validators.required]],
    });
  }

  // adding product to store using Dispatch action
  addProduct(form: NgForm) {
    if (this.productForm.valid) {
      this.store.dispatch(new AddItemAction(form.value));
    } else {
      alert('Invalid Form');
    }
  }

}
