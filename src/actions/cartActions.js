import { ADD_ALL_TO_CART, ADD_TO_CART } from "../constans";
export const addToCart = (data) => {
    return { type: ADD_TO_CART, data: data, value: data.price };
};
export const getFromLocalStorage = () => {
    return { type: ADD_ALL_TO_CART };
};
