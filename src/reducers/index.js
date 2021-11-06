import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productsReducer } from "./productsReducer";
export const reducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
});
