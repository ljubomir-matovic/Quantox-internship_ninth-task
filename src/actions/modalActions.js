import { SHOW_MODAL, HIDE_MODAL } from "constans";
export const showModal = (name = "Product") => {
    return { type: SHOW_MODAL, name };
};
export const hideModal = () => {
    return { type: HIDE_MODAL };
};
