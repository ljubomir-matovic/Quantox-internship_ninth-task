import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Header from "components/Header";
import { actions } from "actions";
import { useEffect } from "react";
import loader from "images/spinner.gif";
import ItemsContainer from "components/ItemsContainer";
import Error404 from "components/Error404";
import Details from "components/Details";
import CartContainer from "components/CartContainer";
import Modal from "components/Modal";
function App() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        actions.productsActions.fetchCategories()(dispatch);
        actions.productsActions.fetchProducts()(dispatch);
        dispatch(actions.cartActions.getFromLocalStorage());
    }, [dispatch]);
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.cart));
    }, [state.cart]);
    return (
        <section className="container">
            {!state.products.loading && (
                <Router>
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<ItemsContainer />} />
                        <Route
                            exact
                            path="/home"
                            element={<ItemsContainer />}
                        />
                        <Route path="/details/:id" element={<Details />} />
                        <Route exact path="/cart" element={<CartContainer />} />
                        <Route path="*" element={<Error404 />} />
                    </Routes>
                    <Modal
                        show={state.modal.show}
                        name={state.modal.name}
                        onClose={() => {
                            dispatch(actions.modalActions.hideModal());
                        }}
                    />
                </Router>
            )}
            {state.products.loading && (
                <section className="loader">
                    <img src={loader} alt="loader" />
                </section>
            )}
        </section>
    );
}

export default App;
