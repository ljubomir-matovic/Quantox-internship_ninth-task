import React from "react";
function Error404({ match }) {
    console.log(match);
    return <h1 className="error">Error. Page not found.</h1>;
}
export default Error404;
