// import the interface
import { ProductItem } from '../models/product.model';
import { ProductAction, ProductActionType } from '../actions/product.action';

// prodcuts interface 
export interface ProductsListState {
    products: Array<ProductItem>;
}

// create a dummy initial state
const initialState: ProductsListState = {
    products: [
        {
            id: '1',
            name: 'Eloquent Javascript Book',
            price: 200
        }
    ]
};

// create a reducer to tie an action and store to manipulate and manage the state
export function productReducer(
    state = initialState,
    action: ProductAction
): ProductsListState {
    switch (action.type) {
        case ProductActionType.ADD_ITEM:
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        default:
            return state;
    }
}