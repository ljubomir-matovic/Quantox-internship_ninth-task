import React from "react";
import { useSelector } from "react-redux";
function Item({ data = null, match = null }) {
    const products = useSelector((state) => state.products.allProducts);
    if (match != null) {
        data = products[match.id];
    }
    return (
        <section className="item">
            <section
                className="product-image"
                style={{ backgroundImage: `url(${data.image})` }}
            ></section>
            <header>
                <h2>{data.title}</h2>
            </header>
            <main>
                <p className="category">{data.category}</p>
                <h2>{`$${data.price}`}</h2>
            </main>
            {match != null ? <p>{data.description}</p> : null}
        </section>
    );
}
export default Item;
