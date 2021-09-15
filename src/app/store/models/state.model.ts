import { ProductsListState } from '../reducers/product.reducer';

// centralized Application State
export interface AppState {
    products: ProductsListState;
};