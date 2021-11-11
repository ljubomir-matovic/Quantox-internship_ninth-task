import {
    ADD_ALL_TO_CART,
    ADD_TO_CART,
    INCREMENT_CART_ITEM,
    REMOVE_FROM_CART,
    DECREMENT_CART_ITEM,
    REMOVE_ALL_FROM_CART,
} from "../constans";
export const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        data: { ...data, count: 1 },
        value: data.price,
    };
};
export const removeFromCart = ({ id }) => {
    return {
        type: REMOVE_FROM_CART,
        id,
    };
};
export const incrementCartItem = ({ id }) => {
    return {
        type: INCREMENT_CART_ITEM,
        id,
    };
};
export const decrementCartItem = ({ id }) => {
    return {
        type: DECREMENT_CART_ITEM,
        id,
    };
};
export const removeAll = () => {
    return {
        type: REMOVE_ALL_FROM_CART,
    };
};
export const getFromLocalStorage = () => {
    return { type: ADD_ALL_TO_CART };
};
