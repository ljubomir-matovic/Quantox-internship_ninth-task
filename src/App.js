import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Header from "components/Header";
import { getFromLocalStorage } from "actions/cartActions";
import { fetchProducts } from "actions/productsAction";
import { useEffect } from "react";
import loader from "images/spinner.gif";
import ItemsContainer from "components/ItemsContainer";
import Error404 from "components/Error404";
function App() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        fetchProducts()(dispatch);
        dispatch(getFromLocalStorage());
    }, []);
    return (
        <section className="container">
            <Header />
            {!state.products.loading && (
                <Router>
                    <Routes>
                        <Route exact path="/" element={<ItemsContainer />} />
                        <Route
                            exact
                            path="/home"
                            element={<ItemsContainer />}
                        />
                        <Route path="*" element={<Error404 />} />
                    </Routes>
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
