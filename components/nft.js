import React from "react";
import Image from "next/image";

function Nft (props) {


    return (
        <div className="review">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <Image src = {props.image} width = '200' height = '200' />
            <form action={props.apiroute}  method="POST">
      <section>
        <button type="submit" role="link">
          Checkout
        </button>
      </section>
    </form>
        </div>
    )
}

export default Nft