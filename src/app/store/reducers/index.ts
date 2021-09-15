import { ActionReducerMap } from '@ngrx/store';
import { productReducer } from './product.reducer';
import { AppState } from '../models/state.model'

export const rootReducer = {};

// Centralized App Reducers 
export const reducers: ActionReducerMap<AppState, any> = {
    products: productReducer
};