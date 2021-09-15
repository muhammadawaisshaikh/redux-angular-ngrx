import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductItem } from '../../store/models/product.model';
import { AppState } from '../../store/models/state.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productItems$: Observable<Array<ProductItem>> | any;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.productItems$ = this.store.select((store) => store.products.products);
  }

}
