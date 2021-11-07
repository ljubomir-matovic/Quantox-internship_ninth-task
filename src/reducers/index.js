import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productsReducer } from "./productsReducer";
export const allReducers = combineReducers({
    products: productsReducer,
    cart: cartReducer,
});
