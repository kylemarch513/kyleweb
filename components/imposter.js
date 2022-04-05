import React, {useState} from "react";
import selfReport from "./suschecker";
import Image from "next/image"
import img from "../components/theimposter.jpg"


function Sus () {
    const [isSus, setSus] = useState(false);
    const becomeSus = () => {
        setSus(!isSus);
        console.log(isSus);

    }

    return (
        <div>
            <button className="bigButton" onClick={becomeSus}>Click if Sus</button>
        </div>
    )
}

export default  Sus
