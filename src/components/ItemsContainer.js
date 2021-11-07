import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Item from "./Item";
function ItemsContainer() {
    const products = useSelector((state) => state.products);
    const navigate = useNavigate();
    const changeTab = (path) => {
        navigate(path);
    };
    return (
        <section className="items-container">
            {products.show.map((v, i) => (
                <Item
                    match={{ id: v.id }}
                    key={i}
                    clickHandler={() => changeTab(`/details/${v.id}`)}
                />
            ))}
        </section>
    );
}
export default ItemsContainer;
