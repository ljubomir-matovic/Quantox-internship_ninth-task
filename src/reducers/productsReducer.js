import {
    APPLY_FILTER,
    FETCH_CATEGORIES,
    FETCH_PRODUCTS,
    SORT_PRODUCTS,
} from "constans";
export const productsReducer = (
    currentState = { allProducts: [], show: [], categories: [], loading: true },
    action
) => {
    let state = { ...currentState };
    switch (action.type) {
        case FETCH_PRODUCTS:
            state.allProducts = [...action.data];
            state.show = [...action.data];
            state.loading = false;
            return state;
        case FETCH_CATEGORIES:
            state.categories = action.data;
            return state;
        case APPLY_FILTER:
            if (state.categories.indexOf(action.filter) > -1)
                state.show = state.allProducts.filter(
                    (v) => action.filter == v.category
                );
            else state.show = [...state.allProducts];
            return state;
        case SORT_PRODUCTS:
            let f;
            switch (action.name) {
                case "title":
                    f = (a, b) => action.sort(a.title, b.title);
                    break;
                case "price":
                    f = (a, b) => action.sort(a.price, b.price);
                    break;
                case "rating":
                    f = (a, b) => action.sort(a.rating.rate, b.rating.rate);
                    break;
                default:
                    state.show = [...state.allProducts];
                    return state;
            }
            if (typeof f == "function") {
                state.show.sort(f);
            }
            return state;
        default:
            return state;
    }
};
