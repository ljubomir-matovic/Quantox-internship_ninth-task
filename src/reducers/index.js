import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productsReducer } from "./productsReducer";
import { modalReducer } from "./modalReducer";
export const allReducers = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    modal: modalReducer,
});
