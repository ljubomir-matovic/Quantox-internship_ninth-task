import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
function ItemsContainer() {
    const products = useSelector((state) => state.products);
    return (
        <section className="items-container">
            {products.show.map((v, i) => (
                <Item data={v} key={i} />
            ))}
        </section>
    );
}
export default ItemsContainer;
