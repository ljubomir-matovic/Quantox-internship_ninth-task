import { PRODUCTS_API, FETCH_PRODUCTS } from "constans";
export const fetchProducts = () => async (dispatch) => {
    try {
        const response = await fetch(PRODUCTS_API);
        const data = await response.json();
        dispatch({ type: FETCH_PRODUCTS, data });
    } catch (error) {
        console.error(error);
    }
};
