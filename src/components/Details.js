import React from "react";
import Item from "./Item";

function Details({ match }) {
    return (
        <section className="details">
            <Item match={match} />
        </section>
    );
}
export default Details;
