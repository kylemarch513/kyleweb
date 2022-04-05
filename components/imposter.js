import React, {useState} from "react";
import selfReport from "./suschecker";


function Sus () {
    const [isSus, setSus] = useState(false);
    const becomeSus = () => {
        setSus(!isSus);
        console.log(isSus);
        <selfReport />

    }

    return (
        <div>
            <button className="bigButton" onClick={becomeSus}>Click if Sus</button>
        </div>
    )
}

export default  Sus
