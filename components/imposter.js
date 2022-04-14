import { isApiRoute } from "next/dist/server/base-server";
import React, {useState} from "react";




function Amongus (props) {
    const [isImposter, setImposter] = useState (true)
    const handleClick = () => showImposter ()
    let status;
    if (!isImposter) {
        (status) = 'Sus'
    } else {
        (status) = 'Not Sus'
    }

    function showImposter () {
        setImposter(!isImposter);
        randomName ();
        
    }
    function randomName () {
        if (isImposter) {
            window.open("https://www.youtube.com/watch?v=9WX97X4MN6s");
        } else {
            console.log('false');
        }
    }    

    return (
        <div>
            <button
            onClick={handleClick}>
                {props.text}
            </button>
            <h3>
                Sus status : {status}
            </h3>
        </div>
    )}

;

export default Amongus