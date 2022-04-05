import React from "react";
import isSus from "./imposter";
import img from "../components/theimposter.jpg"
import Image from "next/image";

function selfReport () {
    if (isSus) {
        return (
            <Image src={img} alt="Amongus Imposter Picture" width="2000" height="1000" style="float" />
        )

    }
}

export default selfReport
