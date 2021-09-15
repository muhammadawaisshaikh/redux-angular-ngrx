import { Action } from '@ngrx/store';
import { ProductItem } from '../models/product.model';

export enum ProductActionType {
    ADD_ITEM = '[PRODUCT] Add Product',
}

export class AddItemAction implements Action {
    readonly type = ProductActionType.ADD_ITEM;

    // add an optional payload
    constructor(public payload: ProductItem) { }
}

export type ProductAction = AddItemAction;