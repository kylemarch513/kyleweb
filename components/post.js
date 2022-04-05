import React from "react";

function Review (props) {
    return (
        <div className="review">
            <h3>{props.name}</h3>
            <p>{props.message}</p>
            <h2>{props.stars}</h2>
        </div>
    )
}

export default Review