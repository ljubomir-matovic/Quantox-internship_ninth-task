import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    ADD_ALL_TO_CART,
    INCREMENT_CART_ITEM,
    DECREMENT_CART_ITEM,
    REMOVE_ALL_FROM_CART,
} from "constans";
export const cartReducer = (
    currentState = { products: [], sum: 0, length: 0 },
    action
) => {
    let state = { ...currentState };
    let index;
    switch (action.type) {
        case ADD_TO_CART:
            state.products.push(action.data);
            state.sum += action.value;
            state.length++;
            return state;
        case REMOVE_FROM_CART:
            index = state.products.findIndex((v) => v.id === action.id);
            let [pr] = state.products.splice(index, 1);
            state.sum -= pr.price * pr.count;
            state.length -= pr.count;
            return state;
        case INCREMENT_CART_ITEM:
            index = state.products.findIndex((v) => v.id === action.id);
            state.products[index].count++;
            state.length++;
            state.sum += state.products[index].price;
            return state;
        case DECREMENT_CART_ITEM:
            index = state.products.findIndex((v) => v.id === action.id);
            if (state.products[index].count > 1) {
                state.products[index].count--;
                state.length--;
                state.sum -= state.products[index].price;
            }
            return state;
        case REMOVE_ALL_FROM_CART:
            state.products = [];
            state.sum = 0;
            state.length = 0;
            return state;
        case ADD_ALL_TO_CART:
            let c = localStorage.getItem("cart");
            if (c != null) {
                state = JSON.parse(c);
            }
            return state;
        default:
            return state;
    }
};
