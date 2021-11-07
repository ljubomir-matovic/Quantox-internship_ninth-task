import {
    PRODUCTS_API,
    FETCH_PRODUCTS,
    PRODUCTS_CATEGORY_API,
    FETCH_CATEGORIES,
    APPLY_FILTER,
    SORT_PRODUCTS,
} from "constans";
export const fetchProducts = () => async (dispatch) => {
    try {
        const response = await fetch(PRODUCTS_API);
        const data = await response.json();
        dispatch({ type: FETCH_PRODUCTS, data });
    } catch (error) {
        console.error(error);
    }
};
export const fetchCategories = () => async (dispatch) => {
    try {
        const response = await fetch(PRODUCTS_CATEGORY_API);
        const data = await response.json();
        dispatch({ type: FETCH_CATEGORIES, data });
    } catch (error) {
        console.error(error);
    }
};
export const applyFilter = (f) => {
    return { type: APPLY_FILTER, filter: f };
};
export const sortProducts = ({ sortF, name }) => {
    return {
        type: SORT_PRODUCTS,
        sort: sortF,
        name,
    };
};
