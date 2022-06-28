import React from "react";
import Image from "next/image";
import { checkout } from "./checkout";

function Nft (props) {

    const handleClick = () => {
        checkout({
            lineItems: [
                {
                    price: props.api,
                    quantity: 1
                }
            ]
        })
    }

    return (
        <div className="review">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <Image src = {props.image} width = '200' height = '200' />
            <button onClick={
                handleClick
            }>Purchase !!</button>
        </div>
    )
}

export default Nft