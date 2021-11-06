import { ADD_TO_CART, REMOVE_FROM_CART, ADD_ALL_TO_CART } from "constans";
export const cartReducer = (
    currentState = { products: [], sum: 0 },
    action
) => {
    let state = { ...currentState };
    switch (action.type) {
        case ADD_TO_CART:
            state.products.push(action.data);
            state.sum += action.value;
            localStorage.setItem("cart", JSON.stringify(state));
            return state;
        case REMOVE_FROM_CART:
            state.products.splice(state.products.findIndex(action.find), 1);
            state.sum -= action.value;
            localStorage.setItem("cart", JSON.stringify(state));
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
