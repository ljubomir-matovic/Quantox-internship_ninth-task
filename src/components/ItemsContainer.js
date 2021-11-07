import { actions } from "actions";
import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Item from "./Item";

function ItemsContainer() {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let filterRef = useRef(0);
    let sortRef = useRef(1);
    const sortAsc = (a, b) => {
        if (a < b) return -1;
        else if (a > b) return 1;
        return 0;
    };
    const sortDesc = (a, b) => {
        if (a > b) return -1;
        else if (a < b) return 1;
        return 0;
    };
    const sortOptions = [
        { key: "", sortF: () => {}, name: "origin" },
        { key: "Name (A-Z)", sortF: sortAsc, name: "title" },
        { key: "Name (Z-A)", sortF: sortDesc, name: "title" },
        { key: "Price low-high", sortF: sortAsc, name: "price" },
        { key: "Price high-low", sortF: sortDesc, name: "price" },
        { key: "Rating low-high", sortF: sortAsc, name: "rating" },
        { key: "Rating high-low", sortF: sortDesc, name: "rating" },
    ];
    const changeTab = (path) => {
        navigate(path);
    };
    return (
        <React.Fragment>
            <section className="sortable">
                <section className="dropdown">
                    <label htmlFor="filters">Select filter</label>
                    <select
                        name="filters"
                        ref={filterRef}
                        onChange={() =>
                            dispatch(
                                actions.productsActions.applyFilter(
                                    filterRef.current.value
                                )
                            )
                        }
                    >
                        <option value="all">ALL</option>
                        {products.categories.map((v, i) => (
                            <option key={i} value={v}>
                                {v.toUpperCase()}
                            </option>
                        ))}
                    </select>
                </section>
                <section className="dropdown">
                    <label htmlFor="sorts">Sort By</label>
                    <select
                        name="sorts"
                        ref={sortRef}
                        onChange={() =>
                            dispatch(
                                actions.productsActions.sortProducts(
                                    sortOptions[Number(sortRef.current.value)]
                                )
                            )
                        }
                    >
                        {sortOptions.map((v, i) => (
                            <option key={i} value={i}>
                                {v.key}
                            </option>
                        ))}
                    </select>
                </section>
            </section>
            <section className="items-container">
                {products.show.map((v, i) => (
                    <Item
                        match={{ id: v.id }}
                        key={i}
                        clickHandler={() => changeTab(`/details/${v.id}`)}
                    />
                ))}
            </section>
        </React.Fragment>
    );
}
export default ItemsContainer;
