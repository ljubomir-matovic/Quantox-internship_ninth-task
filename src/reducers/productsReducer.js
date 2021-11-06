import {
    APPLY_FILTER,
    FETCH_PRODUCTS,
    REMOVE_FILTER,
    SORT_PRODUCTS,
} from "constans";
export const productsReducer = (
    currentState = { allProducts: [], show: [], loading: true },
    action
) => {
    let state = { ...currentState };
    switch (action.type) {
        case FETCH_PRODUCTS:
            state.allProducts = action.data;
            state.show = action.data;
            state.loading = false;
            return state;
        case APPLY_FILTER:
            state.show = state.allProducts.filter(action.filter);
            return state;
        case REMOVE_FILTER:
            state.show = state.allProducts;
            return state;
        case SORT_PRODUCTS:
            state.show.sort(action.sort);
            return state;
        default:
            return state;
    }
};
