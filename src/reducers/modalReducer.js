import { HIDE_MODAL, SHOW_MODAL } from "constans";
export const modalReducer = (
    state = { show: false, name: "Product" },
    action
) => {
    switch (action.type) {
        case SHOW_MODAL:
            return { show: true, name: action.name };
        case HIDE_MODAL:
            return { show: false, name: "Product" };
        default:
            return state;
    }
};
