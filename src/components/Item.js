import { actions } from "actions";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Error404 from "./Error404";
import icon from "images/cart-plus-solid.svg";
function Item({ match = null, clickHandler = () => {} }) {
    const products = useSelector((state) => state.products.allProducts);
    const cartProducts = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();
    let { id } = useParams();
    if (id == null || id === undefined) id = match.id;
    let data = products.find((v) => Number(v.id) === Number(id));
    let index = cartProducts.findIndex((v) => Number(v.id) === Number(id));
    if (data)
        return (
            <section className="item">
                <section
                    className="product-image"
                    style={{
                        backgroundImage: `url(${data.image})`,
                    }}
                    onClick={clickHandler}
                ></section>
                <header onClick={clickHandler}>
                    <h2>{data.title}</h2>
                </header>
                <main>
                    <p className="category">{data.category}</p>
                    <h2>{`$${data.price.toFixed(2)}`}</h2>
                </main>
                {match == null ? (
                    <React.Fragment>
                        <h1>Description</h1>
                        <p>{data.description}</p>
                    </React.Fragment>
                ) : null}
                {match == null ? <h1>Rating:{data.rating.rate}</h1> : null}
                {index >= 0 ? (
                    <h2 className="in-cart-message">Item is in cart</h2>
                ) : (
                    <p
                        onClick={() => {
                            dispatch(actions.cartActions.addToCart(data));
                            dispatch(
                                actions.modalActions.showModal(data.title)
                            );
                        }}
                        className="add-icon"
                    >
                        Add to cart
                        <img className="icon" src={icon} alt="add-icon" />
                    </p>
                )}
                <footer></footer>
            </section>
        );
    else
        return (
            <React.Fragment>
                <Error404 />
            </React.Fragment>
        );
}
export default Item;
